import { Router } from "express"
import { ContactsController } from "../controllers/ContactsController.js"

import auth from "../middlewares/auth.js"

const route = Router()

route.get("/", auth, ContactsController.readAll)
route.post("/", auth, ContactsController.add)
route.delete("/:id", auth, ContactsController.deleteOnlyOne)

export default route
