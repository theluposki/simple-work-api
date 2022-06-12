import User from "../model/User.js";

export const ResetPasswordController = {
  async reset(req, res) {
    const { email, token, password } = req.body;

    try {
      const user = await User.findOne({ email }).select(
        "+passwordResetToken passwordResetExpires"
      );

      if (!user) {
        return res.status(400).json({ error: "user does not exist" });
      }

      if (token !== user.passwordResetToken) {
        return res.status(400).json({ error: "Token invalid!" });
      }

      const now = new Date();

      if (now > user.passwordResetToken) {
        return res
          .status(400)
          .json({ error: "Token expired, generate a new one." });
      }

      user.password = password;

      await user.save();

      res.status(200).json({ success: "Password changed successfully" });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
