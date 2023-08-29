import { Router } from "express";
import {
  addFeedback,
  addNewCellMember,
  getAllRegisterationRows,
} from "src/psf/psf.controllers";

const PsfRouter = Router();

/**
 * @openapi
 * /psf:
 *  get:
 *     tags:
 *     - PSF
 *     summary: get all submitted enteries
 *     security:
 *      - bearerAuth: []  
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ArrayOfObject'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
PsfRouter.get("/", getAllRegisterationRows);
PsfRouter.post("/", addNewCellMember);
PsfRouter.post("/contact-us", addFeedback);

export default PsfRouter;
