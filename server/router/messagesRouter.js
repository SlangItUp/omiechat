import express from 'express';

const  router = express.Router()

import sendMessage from '../controllers/message/sendMessageController.js'
import getMessage from '../controllers/message/getMessageController.js';
import protectedRoute from '../security/protectedRoute.js';

router.post('/send/:id', protectedRoute, sendMessage )
router.get('/get/:id', protectedRoute, getMessage )

export default router;