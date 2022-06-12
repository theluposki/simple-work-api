import { Transport } from "../config/Transport.js";
import User from "../model/User.js";
import crypto from "crypto";

export const ForgotPasswordController = {
  async forgotPassword(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "user does not exist" });
    }

    const token = crypto.randomBytes(20).toString("hex");

    const now = new Date();

    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user._id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    });

    console.log(token, now);

    const message = {
      from: "localhost@localhost",
      to: email,
      subject: "Recuperação de senha",
      text: "Plaintext version of the message",
      html: `
        <p>Ouve um pedido de recuperação de senha foi você?</p>

        <h1>${email}</h1>
        <p>${token}</p>
        `,
    };

    try {
      Transport.sendMail(message, (error) => {
        if (error) {
          return res.status(400).json({ error: "Error fail send email" });
        }

        return res.status(200).json({
          email,
          message: "message send...",
        });
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
