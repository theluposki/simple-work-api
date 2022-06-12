import { Router } from "express";

import { ForgotPasswordController } from "../controllers/ForgotPasswordController.js";

const route = Router();

route.post("/", ForgotPasswordController.forgotPassword);

export default route;
