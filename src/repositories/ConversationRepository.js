import User from "../model/User.js";

export const ConversationRepository = {
  async send(nickName, UserID) {
    const myUser = await User.findById({ _id: UserID})

    //const friend = await User.findOne({ nickName })
    //const c = friend.contacts[0].conversation

    const conversationSendFriend = myUser.contacts.filter(item => {
      console.log(item.nickName)
      return item.nickName === nickName
    })

    if(conversationSendFriend) {
      const send = conversationSendFriend[0].conversation

      send.push({
        message: "Oi Tudo bem",
        author: myUser.nickName,
        status: "online",
      })

      myUser.up

      return send
    }

    return { not: "fail"}
  },
  async readAll() {
    return "read";
  },
};
