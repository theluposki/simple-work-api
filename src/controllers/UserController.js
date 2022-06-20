import { UserRepository } from "../repositories/UserRepository.js";

export const UserController = {
  async auth(req,res){
    const { email, password } = req.body
    try {
      const autenticate = await UserRepository.auth(email,password)
      
      res.status(200).json(autenticate)
    } catch (error) {
      return res.status(400).json({
        error: "[ ERROR ] error authenticating",
      });
    }
  },
  async create(req, res) {
    const { name, lastName, nickName, email, password } = req.body;

    if (!name) {
      return res.status(400).json({ error: "name is required" });
    }

    if (!lastName) {
      return res.status(400).json({ error: "lastName is required" });
    }

    if (!nickName) {
      return res.status(400).json({ error: "nickName is required" });
    }

    if (!email) {
      return res.status(400).json({ error: "email is required" });
    }

    if (!password) {
      return res.status(400).json({ error: "password is required" });
    }

    const user = await UserRepository.create(req.body);

    res.status(201).json(user);
  },
  async readAll(req, res) {
    try {
      res.status(200).json(await UserRepository.readAll());
    } catch (error) {
      return res.status(400).json({
        error: "[ ERROR ] error when listing users",
      });
    }
  },
  async readOnlyOne(req, res) {
    const id = req.params.id;
    try {
      res.status(200).json(await UserRepository.readOnlyOne(id));
    } catch (error) {
      return res.status(400).json({
        error: "[ ERROR ] error listing user",
      });
    }
  },
  async updateOnlyOne(req, res) {
    const id = req.params.id;
    const { name, lastName, urlProfileImg } = req.body;

    try {
      res.status(200).json(
        await UserRepository.updateOnlyOne(id, {
          name,
          lastName,
          urlProfileImg
        })
      );
    } catch (error) {
      return res.status(400).json({
        error: "[ ERROR ] error updating data",
      });
    }
  },
  async deleteOnlyOne(req, res) {
    const id = req.params.id;
    try {
      res.status(200).json(await UserRepository.deleteOnlyOne(id));
    } catch (error) {
      return res.status(400).json({
        error: "[ ERROR ] error deleting user",
      });
    }
  },
};
