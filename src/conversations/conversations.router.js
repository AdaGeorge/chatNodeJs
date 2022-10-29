const router = require('express').Router()
const conversatinServices = require('./conversations.services')


// /conversations

router.route('/')
    .get(passport.authenticate("jwt", { session: false }), conversatinServices.getAllConversations)
    .post(passport.authenticate("jwt", { session: false }), conversatinServices.postConversation)

// /conversations/:conversation_id
router.route('/:conversation_id')
    .get()
    .delete()
    .patch()

// /conversations/:conversation_id/messages
router.route('/:conversation_id/messages')
    .get()
    .post()


// /conversations/:conversation_id/messages/:message_id
router.route('/:conversation_id/messages/:message_id')
    .get()
    .delete()

// /conversations/:conversation_id/participants
router.route('/:conversation_id/participants')
    .get()
    .post()

// /conversations/:conversation_id/participants/:participant_id
router.route('/:conversation_id/participants/:participant_id')
    .get()
    .delete()

