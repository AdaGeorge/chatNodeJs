const conversationsControllers = require('./conversations.controllers')


const getAllConversations = (req, res) => {
    const id = req.user.id
    conversationsControllers.getAllMyConversations(id)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };

const postConversation = (req, res) => {
    const { title, imageUrl } = req.body
    const userId = req.user.id
    if(
        title 
    ){
        conversationsControllers.createConversation({title, imageUrl, userId})
            .then(data => {
                res.status(201).json({message: `Conversation created succesfully`})
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    }else{
        res.status(400).json({ message: 'All fields must be completed', 
        fields: {
            title: 'string'
        }})
    }
}

module.exports = {
    getAllConversations,
    postConversation
}