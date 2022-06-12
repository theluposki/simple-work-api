import { Router } from "express";

import { ResetPasswordController } from "../controllers/ResetPasswordController.js";

const route = Router();

route.post("/", ResetPasswordController.reset);

export default route;
