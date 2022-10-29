const Conversations = require('../models/conversations.models')
const Users = require('../models/users.models');


const getAllMyConversations = (id) => {
    const data = Conversations.findAll({
        where: {
            userId: id
        },
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['firstName', 'lastName', 'email']
            }
        ]   
    })
    return data
}

const createConversation = async (data) => {
    const response = await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        createdBy: data.createdBy
      })
      return response
}

const getConversationById = async (id) => {
    const data = await Users.findOne({
        where: {
          id: id
        },
      });
      return data;
}

const

module.exports={
    getAllMyConversations,
    createConversation
}