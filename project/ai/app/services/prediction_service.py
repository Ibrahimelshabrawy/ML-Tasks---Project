import joblib

from app.core.config import MODEL_PATH
from app.services.preprocessing import prepare_input


class PredictionService:

    def __init__(self, model):
        self.model = model

    def predict(self, data):
        input_data = prepare_input(data)

        prediction = self.model.predict(input_data)

        return float(prediction[0])


def load_model():
    return joblib.load(MODEL_PATH)