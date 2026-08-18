# Backend

This backend is a small Express + MongoDB API for student performance prediction.
It receives student data, sends it to an external AI prediction service, stores
the result in MongoDB, and returns the saved prediction.

## Tech stack

- Node.js
- Express
- MongoDB / Mongoose
- Joi for request validation
- Axios for calling the AI service
- CORS

## Main features

- Health route at `/`
- Prediction endpoint at `/api/v1/ai/predict`
- Input validation before requests reach the service layer
- Database persistence for prediction results

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables in `config/development.env`:

   ```env
   PORT=4009
   DB_URI=your-mongodb-connection-string
   AI_SERVICE_URL=your-ai-service-url
   ```

3. Run the development server:

   ```bash
   npm run start:dev
   ```

## API

### POST `/api/v1/ai/predict`

Request body:

```json
{
  "gender": "male",
  "studyHoursPerWeek": 12,
  "attendanceRate": 90,
  "pastExamScores": 78,
  "parentalEducationLevel": "bachelor",
  "internetAccessAtHome": "yes",
  "extracurricularActivities": "no"
}
```

Response:

- Returns the saved prediction record
- Persists the input and `predictedScore` in MongoDB

## Folder structure

```text
backend/
├── config/
│   ├── config.service.js
│   └── development.env
├── src/
│   ├── index.js
│   ├── app.controller.js
│   ├── DB/
│   │   ├── connectionDB.js
│   │   ├── db.services.js
│   │   └── models/
│   │       └── ai.model.js
│   ├── common/
│   │   ├── middleware/
│   │   │   └── validation.middleware.js
│   │   └── utils/
│   │       └── success.response.js
│   └── modules/
│       └── Ai/
│           ├── ai.controller.js
│           ├── ai.service.js
│           └── ai.validation.js
├── package.json
└── README.md
```

## Notes

- `config/config.service.js` loads environment variables based on `NODE_ENV`.
- `src/app.controller.js` handles server bootstrap, middleware setup, DB
  connection, routing, and error handling.
- `src/modules/Ai/` contains the prediction workflow.
