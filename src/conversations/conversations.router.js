const router = require('express').Router()


// /conversations

router.route('/conversations')
    .get()
    .post()

// /conversations/:conversation_id
router.route('/conversations/:conversation_id')
    .get()
    .delete()
    .patch()

// /conversations/:conversation_id/messages
router.route('/conversations/:conversation_id/messages')
    .get()
    .post()


// /conversations/:conversation_id/messages/:message_id
router.route('/conversations/:conversation_id/messages/:message_id')
    .get()
    .delete()

// /conversations/:conversation_id/participants
router.route('/conversations/:conversation_id/participants')
    .get()
    .post()

// /conversations/:conversation_id/participants/:participant_id
router.route('/conversations/:conversation_id/participants/:participant_id')
    .get()
    .delete()

