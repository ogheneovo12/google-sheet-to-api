import { NextFunction, Request, Response } from "express";
import { MarpEssentials, RequireAtLeastOne } from "src/common/types";

export const MarpMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //check if sheet title and sheet id was provided
  let error: string[] = [];
  const body: MarpEssentials = req.body;
  console.log(req.params)

  if (!body?.sheetId) {
    if (!req.params?.sheetId) {
      error.push("SheetId is required");
    }
  }
  if (!body?.title) {
    if (!req.params?.title) {
      error.push("Title is required");
    }
  }
  if (error.length) {
    return res.status(400).json({
      message: error,
    });
  }
  next();
};
