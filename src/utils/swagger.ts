import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Marp That Sheet!!",
      version,
      description:
        "A Rest Api For updating and reading from a google doc sheet, ensure to share sheet with sheet-bot@seedmarkethub-349820.iam.gserviceaccount.com",
    },
    // components: {
    //   securitySchemas: {
    //     bearerAuth: {
    //       type: "http",
    //       scheme: "bearer",
    //       bearerFormat: "JWT",
    //     },
    //   },
    // },
  },
  apis: [
    "./src/marp/marp.router.ts",
    "./src/auth/auth.router.ts",
    "./src/psf/psf.router.ts",
    "./src/common/*.ts",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
