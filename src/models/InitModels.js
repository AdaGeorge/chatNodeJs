const Messages = require('./messages.models')
const Users = require('./users.models') 

const initModel = ()=>{
    Users.hasMany(Messages)
    Messages.belongsTo(Users)
}

module.exports = initModel