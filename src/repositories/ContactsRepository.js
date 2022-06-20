import User from "../model/User.js";

export const ContactsRepository = {
  async add(UserID, nickName) {
    const user = await User.findOne({ _id: UserID });

    const friend = await User.findOne({ nickName });

    if (!friend) {
      return { error: "was not found" };
    }

    const contactAlreadyExists = user.contacts.find((item) => {
      return item.nickName === friend.nickName;
    });

    if (contactAlreadyExists) {
      return { error: "you are already friends" };
    }

    const myUser = await User.findOneAndUpdate(
      { _id: UserID },
      {
        $push: {
          contacts: {
            nickName: friend.nickName,
            urlProfileImg: friend.urlProfileImg,
            online: false,
          },
        },
      }
    );

    const friendUser = await User.findOneAndUpdate(
      { _id: friend._id },
      {
        $push: {
          contacts: {
            nickName: user.nickName,
            urlProfileImg: user.urlProfileImg,
            online: false,
          },
        },
      }
    );

    return { sucess: "added." };
  },
  async readAll(UserID) {
    const user = await User.findById({ _id: UserID });

    return user.contacts;
  },
  async deleteOnlyOne(UserID, friendID) {
    const removeMyContact = await User.updateOne(
      { _id: UserID },
      {
        $pull: {
          contacts: { _id: friendID },
        },
      }
    );
    return removeMyContact
  },
};
