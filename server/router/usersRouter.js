import express from 'express';
import protectedRoute from '../security/protectedRoute.js';
import getUsers from '../controllers/users/getUsersController.js';

const router = express.Router()

router.get('/' , protectedRoute, getUsers)
export default router;