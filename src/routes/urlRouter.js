import { Router } from "express";
import * as urlController from "../controllers/urlController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import urlSchema from "../schemas/urlSchema.js";

const urlRouter = Router();
urlRouter.post(
  "/shorten",
  validateTokenMiddleware,
  validateSchemaMiddleware(urlSchema),
  urlController.insert
);
export default urlRouter;
