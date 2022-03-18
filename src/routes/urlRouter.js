import { Router } from "express";
import * as urlController from "../controllers/urlController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import urlSchema from "../schemas/urlSchema.js";

const urlRouter = Router();
urlRouter.get("/:shortUrl", urlController.findByShorten);
urlRouter.use(validateTokenMiddleware);
urlRouter.post(
  "/shorten",
  validateTokenMiddleware,
  validateSchemaMiddleware(urlSchema),
  urlController.insert
);
urlRouter.delete("/:id", urlController.remove);
export default urlRouter;
