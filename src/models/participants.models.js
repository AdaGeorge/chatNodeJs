const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Conversations = require('./conversations.models')
const Users = require('./users.models')

const Participants = db.define('conversations', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    conversationId : {
        field: 'conversation_id',
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Conversations
        }
        //? NO TIENE RELACIÓN CON LA TABLA CONVERSATIONS?, se lo puse pero igaul luego pregunto
    },
    userId: {
        field: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    }
   
})

module.exports = Participants