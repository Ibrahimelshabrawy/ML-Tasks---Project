import {Router} from "express";

import {validation} from "../../common/middleware/validation.middleware.js";

import * as AIS from "./ai.service.js";

import * as AIV from "./ai.validation.js";

const AiRouter = Router();

AiRouter.post(
  "/predict",
  validation(AIV.predictStudentPerformanceSchema),
  AIS.predictStudentPerformance,
);

export default AiRouter;
