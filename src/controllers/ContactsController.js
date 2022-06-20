import { ContactsRepository } from "../repositories/ContactsRepository.js"

export const ContactsController = {
  async add(req,res){
    const { nickName } = req.body
    
    try {
      const friend = await ContactsRepository.add(req.userId, nickName) 
      
      res.status(200).json(friend)
    } catch (error) {
      return res.status(400).json({
        error: "[ ERROR ] error add contact.",
      });
    }
  },
  async readAll(req,res){
    try {
      const contacts = await ContactsRepository.readAll(req.userId)
      res.status(200).json(contacts)
    } catch (error) {
      res.status(400).json({
        error: "[ ERROR ] error readAll contact.",
      });
    }
  },
  async deleteOnlyOne(req,res) {
    try {
      const remove = await ContactsRepository.deleteOnlyOne(req.userId, req.params.id)
      res.status(200).json(remove)
    } catch (error) {
      res.status(400).json({
        error: "[ ERROR ] error remove contact.",
      });
    }
  }
};
