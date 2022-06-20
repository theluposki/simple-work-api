import { Router } from "express"
import { ConversationController } from "../controllers/ConversationController.js"

import auth from "../middlewares/auth.js"

const route = Router()

route.post("/", auth, ConversationController.send)
route.get("/", auth, ConversationController.readAll)

export default route
