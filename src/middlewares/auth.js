import jwt from "jsonwebtoken";
import config from "../config/config.js";

export default (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({
      status: 401,
      messagem: "authentication is required to access this route",
      error: "No token provided",
    });
  }

  const parts = header.split(" ");

  if (!parts.length === 2) {
    return res.status(401).json({
      status: 401,
      messagem: "authentication is required to access this route",
      error: "Token error",
    });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      status: 401,
      messagem: "authentication is required to access this route",
      error: "Token malformatted",
    });
  }

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        status: 401,
        messagem: "authentication is required to access this route",
        error: "Token invalid",
      });
    }
    req.userId = decoded.id;
    return next();
  });
};
