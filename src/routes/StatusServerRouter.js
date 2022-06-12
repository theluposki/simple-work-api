import { Router } from "express";
import { StatusServerController } from "../controllers/StatusServerController.js";

const route = Router()

route.get("/", StatusServerController.status)

export default route 
