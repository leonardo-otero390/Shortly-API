import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import urlRouter from "./urlRouter.js";
import serverError from "../middlewares/serverError.js";

const router = Router();
router.use(authRouter);
router.use("/users", userRouter);
router.use("/urls", urlRouter);
router.use(serverError);

export default router;
