import { Request, Response } from "express";
import Gsheet from "./gsheet";
import { extractRowData } from "./helpers";
import { IFeedBack, INewMember } from "./types";
import APP_CONFIG from "./_config";

export const getAllRegisterationRows = async (req: Request, res: Response) => {
  try {
    const regSheet = (await Gsheet()).sheetsByTitle[
      APP_CONFIG.SHEETS.REGISTERATION
    ];
    const rows = await regSheet.getRows();
    return res.status(200).json({
      rows: rows.map((row) => extractRowData(regSheet.headerValues, row)),
    });
  } catch (err: any) {
    res.status(400).json({
      message: "Failed To Retrieve Records",
      error: err?.message,
      status: "failed",
    });
  }
};

export const addNewCellMember = async (req: Request, res: Response) => {
  try {
    const NewMember: INewMember = req.body;
    const regSheet = (await Gsheet()).sheetsByTitle[
      APP_CONFIG.SHEETS.REGISTERATION
    ];
    const newRow = await regSheet.addRow(NewMember);
    return res.status(200).json({
      data: extractRowData(regSheet.headerValues, newRow),
      status: "successful",
    });
  } catch (err: any) {
    res.status(400).json({
      message: "Failed To Save Records",
      error: err?.message,
      status: "failed",
    });
  }
};

export const addFeedback = async (req: Request, res: Response) => {
  try {
    const NewFeedBack: IFeedBack = req.body;
    const feedbackSheet = (await Gsheet()).sheetsByTitle[
      APP_CONFIG.SHEETS.FEEDBACK
    ];

    if (!feedbackSheet.headerValues) {
      await feedbackSheet.setHeaderRow(Object.keys(NewFeedBack));
    }

    const newRow = await feedbackSheet.addRow(NewFeedBack);
    return res.status(200).json({
      data: extractRowData(feedbackSheet.headerValues, newRow),
      status: "successful",
    });
  } catch (err: any) {
    res.status(400).json({
      message: "Failed To Save Feedback Records",
      error: err?.message,
      status: "failed",
    });
  }
};
