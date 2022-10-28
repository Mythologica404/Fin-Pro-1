import { Router } from "express";
import userRouter from "./userRouter.js";
import reflectionRouter from "./reflectionRouter.js";
import authentication from "../middleware/auth.js";

const routes = Router();

routes.use("/api/v1/users/", userRouter);
routes.use("/api/v1/reflections/", authentication, reflectionRouter);

export default routes;
