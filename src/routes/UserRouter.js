import { Router } from "express"
import { UserController } from "../controllers/UserController.js"

import auth from "../middlewares/auth.js"

const route = Router()

route.post("/auth", UserController.auth)
route.post("/", UserController.create)

route.get("/:id", auth, UserController.readOnlyOne)
route.get("/", auth, UserController.readAll)
route.put("/:id", auth, UserController.updateOnlyOne)
route.delete("/:id", auth, UserController.deleteOnlyOne)


export default route
