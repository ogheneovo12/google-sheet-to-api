import { Router } from "express";
import { MarpMiddleWare } from "./marp.middleware";
import marpControllers from "./marp.controllers";

const MarpRouter = Router();

/**
 * @openapi
 * /marp/{sheetId}/{title}:
 *  get:
 *     tags:
 *     - Sheet
 *     description: Returns all sheet enteries
 *     parameters:
 *      - in: path
 *        name: sheetId
 *        required: true
 *        schema:
 *          type: string
 *        description: google sheet id
 *      - in: path
 *        name: title
 *        required: true
 *        schema:
 *          type: string
 *        description: specific sheet title
 *     responses:
 *       200:
 *         description: returns an array of rows from sheet
 */

MarpRouter.get("/:sheetId/:title", MarpMiddleWare, marpControllers.getAllLogs);

/**
 * @openapi
 * '/marp':
 *  post:
 *     tags:
 *     - Sheet
 *     summary: Add a row
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/MarpEssentials'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MarpEssentialsResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

MarpRouter.post("/", MarpMiddleWare, marpControllers.logMessage);

export default MarpRouter;
