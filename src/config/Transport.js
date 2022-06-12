import nodemailer from "nodemailer";

export const Transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3d7e0c6df08a7c",
    pass: "3fed164ab28a7a",
  },
});
