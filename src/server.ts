import express, { Express, Request, Response } from "express";
import {
  addFeedback,
  addNewCellMember,
  getAllRegisterationRows,
} from "./controllers";
import APP_CONFIG from "./_config";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", getAllRegisterationRows);
app.post("/", addNewCellMember);
app.post("/contact-us", addFeedback);

app.listen(APP_CONFIG.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${APP_CONFIG.PORT}`
  );
});
