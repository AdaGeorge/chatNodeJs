const Conversations = require('../models/conversations.models')
const uuid = require("uuid");
const { model } = require('../utils/database');
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


module.exports={
    getAllMyConversations
}