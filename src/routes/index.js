import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import serverError from "../middlewares/serverError";

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(serverError);

export default router;
