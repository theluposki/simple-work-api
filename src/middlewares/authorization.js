import jwt from "jsonwebtoken";
import config from "../config/config.js";

export default (req, res, next) => {
  const header = req.headers.authorization;

  const token = header.split(" ");

  jwt.verify(token[1], config.secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        status: 401,
        messagem: "Could not verify invalid authorization token.",
        error: "Token invalid",
      });
    }
    //you do not have permission
    if (decoded.rules !== "admin") {
      return res.status(403).json({
        status: 403,
        messagem: "Forbidden",
        error: "you do not have permission",
      });
    }
    req.userId = decoded.rules;
    return next();
  });
};
