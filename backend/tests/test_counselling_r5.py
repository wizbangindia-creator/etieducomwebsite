# Round 5: /free-counselling hero redesign - counselling lead API regression
import os
import time
import uuid
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")
db = MongoClient(os.environ.get("MONGO_URL", "mongodb://localhost:27017"))[os.environ.get("DB_NAME", "test_database")]
created_ids = []


@pytest.fixture(scope="module", autouse=True)
def cleanup():
    yield
    for i in created_ids:
        db.counselling_leads.delete_one({"id": i})


# Counselling lead create -> persisted in DB
def test_create_counselling_lead_persists():
    name = f"TEST_R5_{uuid.uuid4().hex[:6]}"
    phone = "9" + str(int(time.time() * 1000))[-9:]
    payload = {"name": name, "phone": phone, "education": "Graduate", "preferred_track": "Cybersecurity"}
    r = requests.post(f"{BASE_URL}/api/counselling-leads", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    d = r.json()
    assert d["name"] == name and d["education"] == "Graduate" and d["preferred_track"] == "Cybersecurity"
    assert isinstance(d["id"], str)
    created_ids.append(d["id"])
    doc = db.counselling_leads.find_one({"id": d["id"]}, {"_id": 0})
    assert doc and doc["phone"] == phone


# Validation: missing fields rejected
def test_counselling_lead_missing_fields():
    r = requests.post(f"{BASE_URL}/api/counselling-leads", json={"name": "TEST_x"}, timeout=20)
    assert r.status_code == 422


# Admin list requires auth
def test_counselling_list_requires_auth():
    r = requests.get(f"{BASE_URL}/api/counselling-leads", timeout=20)
    assert r.status_code in (401, 403)
