import express from 'express';

const router = express.Router();

import startController from '../controllers/auth/startController.js';
import logOutController from '../controllers/auth/logOutController.js';

router.post("/start", startController);
router.post("/logout", logOutController);

export default router;