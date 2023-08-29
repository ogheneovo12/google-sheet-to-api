import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";
import APP_CONFIG from "./_config";
import authRouter from "./auth/auth.router";
import MarpRouter from "./marp/marp.router";
import PsfRouter from "./psf/psf.router";
import swaggerDocs from "./utils/swagger";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/psf", PsfRouter);
app.use("/marp", MarpRouter);

mongoose
  .connect(APP_CONFIG.databaseUrl)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error Connecting to Database"));

app.listen(APP_CONFIG.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${APP_CONFIG.PORT}`
  );
  swaggerDocs(app);
});
