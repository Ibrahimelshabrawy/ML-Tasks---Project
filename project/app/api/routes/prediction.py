from fastapi import APIRouter, Request

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse
)


router = APIRouter()


@router.post("/predict", response_model=PredictionResponse)
def predict(data: PredictionRequest, request: Request):
    prediction_service = request.app.state.prediction_service

    predicted_score = prediction_service.predict(data)

    return {
        "predicted_score": round(predicted_score, 2)
    }