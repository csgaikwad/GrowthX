import express from 'express';
import { registerUser, loginUser, uploadAssignment } from '../Controllers/userController.js';
import { validateUserRegistration, validateUserLogin, validateAssignmentUpload, handleValidationErrors } from '../Utils/validator.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';

const router = express.Router();

// User Registration Route
router.post('/register', validateUserRegistration, handleValidationErrors, registerUser);

// User Login Route
router.post('/login', validateUserLogin, handleValidationErrors, loginUser);

// Upload Assignment Route
router.post('/upload', authMiddleware, validateAssignmentUpload, handleValidationErrors, uploadAssignment);

export default router;
