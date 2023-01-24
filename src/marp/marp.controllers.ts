import { Request, Response } from "express";
import { MarpEssentials } from "src/common/types";
import { initializeSheet } from "src/gsheet";
import { extractRowData } from "../helpers";

export const getAllLogs = async (req: Request, res: Response) => {
  try {
    const { sheetId, title } = req.params;
    const logSheet = (await initializeSheet(sheetId)).sheetsByTitle[title];
    const rows = await logSheet.getRows();
    return res.status(200).json({
      rows: rows.map((row) => extractRowData(logSheet.headerValues, row)),
    });
  } catch (err: any) {
    res.status(400).json({
      message: "Failed To Retrieve Records",
      error: err?.message,
      status: "failed",
    });
  }
};

export const logMessage = async (req: Request, res: Response) => {
  try {
    const messageLog: MarpEssentials = req.body;
    const logSheet = (await initializeSheet(messageLog.sheetId)).sheetsByTitle[
      messageLog.title
    ];

    if (!logSheet.headerValues) {
      await logSheet.setHeaderRow(Object.keys(messageLog.payload));
    }

    const newRow = await logSheet.addRow(messageLog.payload);
    return res.status(200).json({
      data: extractRowData(logSheet.headerValues, newRow),
      status: "successful",
    });
  } catch (err: any) {
    res.status(400).json({
      message: "Failed To Save Log Records",
      error: err?.message,
      status: "failed",
    });
  }
};

export default {
  getAllLogs,
  logMessage,
};
