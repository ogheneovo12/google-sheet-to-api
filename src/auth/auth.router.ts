import authLib from "./auth";
import { Router } from "express";

const authRouter = Router();

/**
 * @openapi
 * /auth/register:
 *  post:
 *      tags:
 *      - AUTH
 *      description: Register Endpoint
 *      requestBody:
 *          description: Optional description in *Markdown*
 *          required: true
 *          content: 
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/RegisterPayload'
 *                      examples:
 *                          user:
 *                              value:
 *                                  email: ade
 *                                  password: random string
 *      responses:
 *       200:
 *         description: returns access and refresh token
 */

authRouter.post("/register", authLib.handleRegister);

/**
 * @openapi
 * /auth/login:
 *  post:
 *      tags:
 *      - AUTH
 *      description: Login Endpoint
 *      requestBody:
 *          description: Optional description in *Markdown*
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/LoginPayload'
 *                      examples:
 *                          user:
 *                              value:
 *                                  email: ade
 *                                  password: random string
 *      responses:
 *       200:
 *         description: returns access and refresh toke
 * 
*/
authRouter.post("/login", authLib.handleLogin);

/**
 * @openapi
 * /auth/refresh:
 *  post:
 *      tags:
 *      - AUTH
 *      description: Refresh Access Token
 *      security:
 *      - bearerAuth: []  
 *      responses:
 *       200:
 *         description: returns access and refresh token
 * 
*/
authRouter.post("/refresh", authLib.handleRefreshToken());

export default authRouter;
