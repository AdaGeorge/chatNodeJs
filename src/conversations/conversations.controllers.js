const Conversations = require('../models/conversations.models')
const Users = require('../models/users.models');


const getAllMyConversations = (id) => {
    const data = Conversations.findAll({
        where: {
            id: id
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
    const response = await conversationsModel.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        createdBy: data.createdBy
      })
      return response
}


module.exports={
    getAllMyConversations,
    createConversation
}