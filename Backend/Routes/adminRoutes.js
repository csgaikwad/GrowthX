import express from 'express';
import { loginAdmin, registerAdmin } from '../Controllers/adminController.js';
import { viewAssignments, acceptAssignment, rejectAssignment } from '../Controllers/assignmentController.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';

const router = express.Router();

// Admin Register
router.post('/register', registerAdmin);

// Admin Login
router.post('/login', loginAdmin);

// View Assignments
router.get('/assignments', authMiddleware, viewAssignments);

// Accept or Reject Assignment
router.post('/assignments/:id/accept', authMiddleware, acceptAssignment);
router.post('/assignments/:id/reject', authMiddleware, rejectAssignment);

export default router;
