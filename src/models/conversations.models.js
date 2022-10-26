const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
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

module.exports = Conversations