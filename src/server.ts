import express, { Express, Request, Response } from "express";
import {
  addFeedback,
  addNewCellMember,
  getAllRegisterationRows,
} from "./controllers";
import APP_CONFIG from "./_config";
import cors from "cors";
import MarpRouter from "./marp/marp.router";
import swaggerDocs from "./utils/swagger";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", getAllRegisterationRows);
app.post("/", addNewCellMember);
app.post("/contact-us", addFeedback);
app.use("/marp", MarpRouter);

app.listen(APP_CONFIG.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${APP_CONFIG.PORT}`
  );
  swaggerDocs(app);
});
