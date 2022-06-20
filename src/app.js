import 'dotenv/config'
import express from "express";
import "express-async-errors"
import compression from "compression"
import helmet from "helmet"

import serverRouter from "./routes/StatusServerRouter.js";
import UserRouter from "./routes/UserRouter.js";

import forgotPasswordRouter from "./routes/ForgotPasswordRouter.js";
import resetPasswordRouter from "./routes/ResetPasswordRouter.js";

import ContactRouter from "./routes/ContactsRouter.js"
import ConversationRouter from "./routes/ConversationRouter.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(compression())

app.use("/", serverRouter);
app.use("/users", UserRouter);
app.use("/forgot_password", forgotPasswordRouter);
app.use("/reset_password", resetPasswordRouter);
app.use("/contact", ContactRouter);
app.use("/conversation", ConversationRouter);

app.use((error, req,res,next) => {
  console.log(error)
  return res.status(500).json({  error: "[ ERROR ] error authenticating" })
})

export { app };
