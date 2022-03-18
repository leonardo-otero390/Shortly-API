import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();
userRouter.post(
  "/",
  validateSchemaMiddleware(userSchema),
  userController.createUser
);
userRouter.get("/", validateTokenMiddleware, userController.getUser);
userRouter.get("/:id", userController.listUserUrls);
export default userRouter;
