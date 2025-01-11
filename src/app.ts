import swaggerUi from "swagger-ui-express";
import express, { json, urlencoded } from "express";
import { Response as ExResponse, Request as ExRequest } from "express";

import { RegisterRoutes } from "../build/routes";

export const app = express();

app.use("/docs", swaggerUi.serve, (_req: ExRequest, res: ExResponse) => {
    import("../build/swagger.json").then(swaggerDoc => {
        res.send(swaggerUi.generateHTML(swaggerDoc));
    });
});

// Use body parser to read sent json payloads
app.use(
    urlencoded({
        extended: true,
    })
);
app.use(json());

RegisterRoutes(app);