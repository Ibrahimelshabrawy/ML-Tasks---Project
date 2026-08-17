from fastapi.testclient import TestClient

from app.main import app


def test_health():
    with TestClient(app) as client:
        response = client.get("/health")

        assert response.status_code == 200
        assert response.json() == {"status": "ok"}


def test_prediction():
    data = {
        "Gender": "Male",
        "Study_Hours_per_Week": 25,
        "Attendance_Rate": 85,
        "Past_Exam_Scores": 80,
        "Parental_Education_Level": "Masters",
        "Internet_Access_at_Home": "Yes",
        "Extracurricular_Activities": "Yes"
    }

    with TestClient(app) as client:
        response = client.post(
            "/api/v1/predict",
            json=data
        )

        assert response.status_code == 200
        assert "predicted_score" in response.json()


def test_invalid_prediction():
    data = {
        "Gender": "Male",
        "Study_Hours_per_Week": 25
    }

    with TestClient(app) as client:
        response = client.post(
            "/api/v1/predict",
            json=data
        )

        assert response.status_code == 422