from contextlib import asynccontextmanager

import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.prediction import router as prediction_router
from app.core.config import APP_NAME, MODEL_PATH
from app.services.prediction_service import PredictionService


@asynccontextmanager
async def lifespan(app: FastAPI):
    model = joblib.load(MODEL_PATH)
    app.state.prediction_service = PredictionService(model)

    yield


app = FastAPI(
    title=APP_NAME,
    lifespan=lifespan
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Student Performance AI is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }


app.include_router(
    prediction_router,
    prefix="/api/v1"
)