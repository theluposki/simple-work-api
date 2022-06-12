import User from "../model/User.js"
import bcrypt from "bcryptjs"
import { GenerateToken } from "../Util/GenerateToken.js"

export const UserRepository = {
  async auth(email, password){

    const existingUser = await User.findOne({ email }).select("+password")
    
    if(!existingUser){
      return {
        error: "[ ERROR ] Invalid username or password"
      }
    }

    if (!(await bcrypt.compare(password, existingUser.password))) {
      return {
        error: "[ ERROR ] Invalid username or password"
      }
    }

    let token = await GenerateToken({
      id: existingUser._id,
      rules: existingUser.rules
    })

    return {
      _id: existingUser._id,
      name: existingUser.name,
      lastName: existingUser.lastName,
      nickName: existingUser.nickName,
      email: existingUser.email,
      rules: existingUser.rules,
      token
    }
  },
  async create(body) {
    const { email } = body

    const existingUser = await User.findOne({ email })
    
    if(existingUser){
      return {
        error: "[ ERROR ] user already exists"
      }
    }

    return await User.create(body)
  },
  async readAll(){
    return await User.find()
  },
  async readOnlyOne(id){
    return await User.findById({ _id: id })
  },
  async updateOnlyOne(id, body){
    return await User.findByIdAndUpdate({ _id: id }, body)
  },
  async deleteOnlyOne(id){
    return await User.findByIdAndRemove({ _id: id })
  }
}
