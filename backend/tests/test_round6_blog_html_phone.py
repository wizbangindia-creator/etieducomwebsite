# Round 6: blog custom HTML/CSS preservation + counselling phone validation + MSG91 WhatsApp trigger
import os
import time
import uuid
import jwt
import pytest
import requests
from datetime import datetime, timedelta, timezone
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv("/app/backend/.env")
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")
db = MongoClient(os.environ["MONGO_URL"])[os.environ["DB_NAME"]]
created_blogs, created_leads = [], []

STYLED = (
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap">'
    '<style>.eti-box > p { color: rgb(200, 0, 0); } .eti-title { font-family: Poppins, sans-serif; }</style>'
    '<div class="eti-box" style="background: linear-gradient(90deg, #ff0000, #0000ff); padding: 24px">'
    '<h2 class="eti-title">Hello</h2><p>Red para</p>'
    '<a href="javascript:alert(1)" id="bad-link">bad</a>'
    '<img src="x.png" onerror="alert(1)" id="bad-img">'
    '<script>alert("xss")</script>'
    '<link rel="stylesheet" href="http://insecure.example.com/a.css">'
    '</div>'
)


@pytest.fixture(scope="module")
def admin_headers():
    admin = db.admin_users.find_one({}, {"_id": 0, "id": 1})
    if not admin:
        pytest.skip("no admin user")
    tok = jwt.encode({"sub": admin["id"], "exp": datetime.now(timezone.utc) + timedelta(hours=1),
                      "iat": datetime.now(timezone.utc)}, os.environ["JWT_SECRET"], algorithm="HS256")
    return {"Authorization": f"Bearer {tok}"}


@pytest.fixture(scope="module", autouse=True)
def cleanup():
    yield
    for i in created_blogs:
        db.blogs.delete_one({"id": i})
    for i in created_leads:
        db.counselling_leads.delete_one({"id": i})
        db.lead_attributions.delete_one({"lead_id": i})


def _blog(content, slug):
    return {"title": "TEST_ R6 styled blog", "slug": slug, "excerpt": "TEST_ excerpt for round 6",
            "content": content, "category": "Testing", "author": "TEST_Author", "is_published": True}


# Blog create preserves style/link/inline; strips scripts/handlers/js hrefs
def test_blog_create_preserves_css(admin_headers):
    slug = f"test-r6-styled-{uuid.uuid4().hex[:6]}"
    r = requests.post(f"{BASE_URL}/api/blogs", json=_blog(STYLED, slug), headers=admin_headers, timeout=20)
    assert r.status_code == 200, r.text
    created_blogs.append(r.json()["id"])
    c = requests.get(f"{BASE_URL}/api/blogs/{slug}", timeout=20).json()["content"]
    assert ".eti-box > p { color: rgb(200, 0, 0); }" in c and "&gt;" not in c
    assert "linear-gradient(90deg, #ff0000, #0000ff); padding: 24px" in c
    assert 'class="eti-box"' in c and 'class="eti-title"' in c
    assert "fonts.googleapis.com" in c
    assert "insecure.example.com" not in c
    assert "<script" not in c and "alert(\"xss\")" not in c
    assert "onerror" not in c and "javascript:" not in c
    pytest.slug_styled = slug


# Blog update preserves styles
def test_blog_update_preserves_css(admin_headers):
    bid = created_blogs[0]
    new = STYLED.replace("rgb(200, 0, 0)", "rgb(0, 150, 0)") + '<p onclick="x()">u</p>'
    r = requests.put(f"{BASE_URL}/api/blogs/{bid}", json={"content": new}, headers=admin_headers, timeout=20)
    assert r.status_code == 200, r.text
    c = requests.get(f"{BASE_URL}/api/blogs/{bid}", timeout=20).json()["content"]
    assert ".eti-box > p { color: rgb(0, 150, 0); }" in c and "&gt;" not in c
    assert "padding: 24px" in c and "onclick" not in c


# Plain blog (no styles) stays as-is
def test_blog_plain(admin_headers):
    slug = f"test-r6-plain-{uuid.uuid4().hex[:6]}"
    r = requests.post(f"{BASE_URL}/api/blogs", json=_blog("<h2>Plain</h2><p>Plain paragraph text</p>", slug),
                      headers=admin_headers, timeout=20)
    assert r.status_code == 200, r.text
    created_blogs.append(r.json()["id"])
    assert "<p>Plain paragraph text</p>" in r.json()["content"]


def _lead(phone):
    return {"name": f"TEST_R6_{uuid.uuid4().hex[:5]}", "phone": phone, "education": "Graduate",
            "preferred_track": "Cybersecurity"}


# Invalid phones rejected (no WhatsApp sent)
@pytest.mark.parametrize("phone", ["5876543210", "0876543210", "1234567890", "987654321", "98765432101",
                                   "+919876543210", "919876543210", "98765abcde", ""])
def test_phone_invalid(phone):
    r = requests.post(f"{BASE_URL}/api/counselling-leads", json=_lead(phone), timeout=20)
    assert r.status_code == 422, f"{phone}: {r.status_code} {r.text}"


# Valid phone with spaces accepted & stripped; fast response; WhatsApp log line
def test_phone_valid_spaces_and_whatsapp_log():
    t = time.time()
    r = requests.post(f"{BASE_URL}/api/counselling-leads", json=_lead("90000 00000"), timeout=20)
    elapsed = time.time() - t
    assert r.status_code == 200, r.text
    created_leads.append(r.json()["id"])
    assert r.json()["phone"] == "9000000000"
    print(f"response time {elapsed:.2f}s")
    time.sleep(6)
    log = open("/var/log/supervisor/backend.err.log").read()[-20000:]
    lines = [l for l in log.splitlines() if "Counselling WhatsApp" in l and "0000" in l]
    print(lines[-2:])
    assert lines, "no WhatsApp log line"
    assert "(etiweb) to ****0000: 200" in lines[-1]
