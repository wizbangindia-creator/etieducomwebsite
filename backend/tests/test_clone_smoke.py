# Smoke tests for cloned ETI Educom app: health, lead forms, admin login, sitemap, public pages
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
ADMIN_PASSWORD = "ETIadmin@2026"  # from /app/memory/test_credentials.md


@pytest.fixture(scope="module")
def s():
    return requests.Session()


# Health
def test_health(s):
    r = s.get(f"{BASE_URL}/api/health", timeout=30)
    assert r.status_code == 200
    assert r.json()["status"] == "healthy"


# Lead forms
def test_quick_enquiry(s):
    r = s.post(f"{BASE_URL}/api/quick-enquiry", json={
        "name": "TEST_Smoke", "phone": "9999999999", "email": "test_smoke@example.com",
        "interest": "Cyber Security", "source": "homepage"}, timeout=30)
    assert r.status_code == 200, r.text
    d = r.json()
    assert d["name"] == "TEST_Smoke" and isinstance(d["id"], str)


def test_contact(s):
    r = s.post(f"{BASE_URL}/api/contact", json={
        "name": "TEST_Smoke", "email": "test_smoke@example.com", "phone": "9999999999",
        "enquiry_type": "General", "message": "TEST_ smoke test message"}, timeout=30)
    assert r.status_code == 200, r.text
    assert r.json()["email"] == "test_smoke@example.com"


def test_contact_validation(s):
    r = s.post(f"{BASE_URL}/api/contact", json={"name": "x"}, timeout=30)
    assert r.status_code == 422


# Admin login
def test_admin_wrong_password(s):
    r = s.post(f"{BASE_URL}/api/admin/login", json={"password": "wrong-pass"}, timeout=30)
    assert r.status_code == 401


def test_admin_correct_password(s):
    r = s.post(f"{BASE_URL}/api/admin/login", json={"password": ADMIN_PASSWORD}, timeout=30)
    assert r.status_code == 200, r.text
    d = r.json()
    assert d.get("requires_setup") is True or d.get("requires_otp") is True
    if d.get("requires_setup"):
        assert d["secret"] and d["qr_data_url"].startswith("data:image/png;base64,")


def test_admin_protected_requires_auth(s):
    r = s.get(f"{BASE_URL}/api/contact", timeout=30)
    assert r.status_code in (401, 403)


# Public data endpoints
@pytest.mark.parametrize("ep", ["programs", "blogs", "faqs", "reviews", "events"])
def test_public_endpoints(s, ep):
    r = s.get(f"{BASE_URL}/api/{ep}", timeout=30)
    assert r.status_code == 200, r.text
    assert isinstance(r.json(), list)


# Sitemap + pages via Next.js
def test_sitemap(s):
    r = s.get(f"{BASE_URL}/sitemap.xml", timeout=120)
    assert r.status_code == 200
    assert "<urlset" in r.text or "<sitemapindex" in r.text


@pytest.mark.parametrize("path", ["/", "/programs", "/about", "/contact", "/blogs", "/placements", "/faq", "/franchise", "/eti-manage-x9k2m"])
def test_pages(s, path):
    r = s.get(f"{BASE_URL}{path}", timeout=180)
    assert r.status_code == 200, f"{path} -> {r.status_code}"
