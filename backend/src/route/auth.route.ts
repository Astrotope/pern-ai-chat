import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// http://localhost:5010/api/auth/login
router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);

export default router;