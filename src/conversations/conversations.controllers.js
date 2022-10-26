const Conversations = require('../models/conversations.models')
const uuid = require("uuid");


const getAllMyConversations = (id) => {
    const data = Conversations.findAll({
        where: {
            id
        }
    })
}
