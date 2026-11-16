# Program Finder (round 4): POST /api/quick-enquiry with source 'program-finder'
import os
import random
import pytest
import requests
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv("/app/frontend/.env")
load_dotenv("/app/backend/.env")
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")

created_ids = []


@pytest.fixture(scope="module", autouse=True)
def cleanup():
    yield
    if created_ids:
        db = MongoClient(os.environ["MONGO_URL"])[os.environ["DB_NAME"]]
        for i in created_ids:
            db.quick_enquiries.delete_one({"id": i})
            db.lead_attributions.delete_one({"lead_id": i})


def _phone():
    return "9" + "".join(random.choice("0123456789") for _ in range(9))


# valid finder submission persists with source program-finder
def test_finder_enquiry_success():
    payload = {"name": "TEST_Finder User", "phone": _phone(), "interest": "AI & ML Engineering", "source": "program-finder"}
    r = requests.post(f"{BASE_URL}/api/quick-enquiry", json=payload, timeout=30)
    assert r.status_code == 200, r.text
    d = r.json()
    assert isinstance(d["id"], str)
    created_ids.append(d["id"])
    assert d["source"] == "program-finder"
    assert d["interest"] == payload["interest"]
    assert d["name"] == payload["name"]
    db = MongoClient(os.environ["MONGO_URL"])[os.environ["DB_NAME"]]
    doc = db.quick_enquiries.find_one({"id": d["id"]}, {"_id": 0})
    assert doc and doc["source"] == "program-finder"


# validation: short phone rejected
def test_finder_enquiry_short_phone():
    r = requests.post(f"{BASE_URL}/api/quick-enquiry", json={"name": "TEST_x", "phone": "123", "interest": "Python", "source": "program-finder"}, timeout=20)
    assert r.status_code == 422


# validation: missing name rejected
def test_finder_enquiry_missing_name():
    r = requests.post(f"{BASE_URL}/api/quick-enquiry", json={"phone": _phone(), "interest": "Python", "source": "program-finder"}, timeout=20)
    assert r.status_code == 422
