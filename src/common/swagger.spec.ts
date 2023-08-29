/**
 * @openapi
 * components:
 *  schemas:
 *    MarpEssentials:
 *      type: object
 *      required:
 *        - sheetId
 *        - title
 *      properties:
 *        sheetId:
 *          type: string
 *        title:
 *          type: string
 *        payload:
 *          type: object
 *    MarpEssentialsResponse:
 *      type: array
 *      items:
 *        type: object
 *    LoginPayload:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        password:
 *           type: string
 *    RegisterPayload:
 *      type: object
 *      properties:
 *          first_name:
 *              type: string
 *          last_name:
 *              type: string
 *          password:
 *              type: string
 *          email:
 *              type: string
 *    ArrayOfObject:
 *      type: array
 *      items:
 *          type: object
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT   
 * */


