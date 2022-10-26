const Messages = require("../models/messages.models");
const uuid = require("uuid");
const Users = require("../models/users.models");


const getAllMessages = async () => {
  const data = await Messages.findAll({
    attributes: {
      exclude: ["userId"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      }
    ],
  });
  return data;
};

const getMessagesByConversation = async (conversation_id) => {
  const data = await Messages.findAll({
    where: {
      conversation_id,
    },
  });
  return data;
}
;
const getMessagesByParticipant = async (participant_id) => {
  const data = await Messages.findAll({
    where: {
      participant_id,
    },
  });
  return data;
};

const getMessageById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["userId", "updatedAt", "createdAt"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      }
    ],
  });
  return data;
};

const createMessage = async (data) => {
  const newMessage = {
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId,
    categoryId: data.categoryId,
  };
  const response = await Messages.create(newMessage);
  return response;
};

module.exports = {

};
