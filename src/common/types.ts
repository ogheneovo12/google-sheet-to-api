export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

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
 * */
export interface MarpEssentials {
  sheetId: string;
  title: string;
  payload: any;
}
