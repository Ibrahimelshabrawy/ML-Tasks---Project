import joi from "joi";
import {
  extracurricularActivitiesEnum,
  GenderEnum,
  internetAccessAtHomeEnum,
} from "../../DB/models/ai.model.js";

export const predictStudentPerformanceSchema = {
  body: joi
    .object({
      gender: joi
        .string()
        .valid(...Object.values(GenderEnum))
        .required(),

      studyHoursPerWeek: joi.number().required(),

      attendanceRate: joi.number().required(),

      pastExamScores: joi.number().required(),

      parentalEducationLevel: joi.string().required(),

      internetAccessAtHome: joi
        .string()
        .valid(...Object.values(internetAccessAtHomeEnum))
        .required(),

      extracurricularActivities: joi
        .string()
        .valid(...Object.values(extracurricularActivitiesEnum))
        .required(),
    })
    .required(),
};
