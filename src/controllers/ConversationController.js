import { ConversationRepository } from "../repositories/ConversationRepository.js";

export const ConversationController = {
  async send(req, res) {
    const { nickName } = req.body;

    if (!nickName) {
      return res.status(400).json({
        error: "[ ERROR ] nickName is required!",
      });
    }

    const send = await ConversationRepository.send(nickName, req.userId);

    res.status(200).json(send);
  },
  async readAll(req, res) {
    const conversations = await ConversationRepository.readAll();

    res.status(200).json(conversations);
  },
};
