import express from "express";
import checkConnection from "./DB/connectionDB.js";
import cors from "cors";
import studentPerformanceRouter from "./modules/Ai/ai.controller.js";
import AiRouter from "./modules/Ai/ai.controller.js";
const app = express();
const port = process.env.PORT;

const bootstrap = async () => {
  app.use(cors({origin: "*"}));
  app.use(express.json());
  app.get("/", (req, res) => res.send("Hello World!"));

  // Connection DB
  checkConnection();

  // // Routers
  app.use("/api/v1/ai", AiRouter);

  app.use("{/*demo}", (req, res, next) => {
    throw new Error("`The URL ${req.originalUrl} Is Not Found 😥`", {
      cause: 500,
    });
  });

  app.use((err, req, res, next) => {
    res.status(err.cause || 500).json({message: err.message, stack: err.stack});
  });

  app.listen(port, () =>
    console.log(`Student Performance App listening on port ${port}!`),
  );
};
export default bootstrap;
