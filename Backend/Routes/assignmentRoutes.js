import express from 'express';
import { viewAssignments, acceptAssignment, rejectAssignment } from '../Controllers/assignmentController.js';
import { authMiddleware } from '../Middlewares/authMiddleware.js';

const router = express.Router();

// View Assignments (admin-only route)
router.get('/assignments', authMiddleware, viewAssignments);

// Accept an Assignment
router.post('/assignments/:id/accept', authMiddleware, acceptAssignment);

// Reject an Assignment
router.post('/assignments/:id/reject', authMiddleware, rejectAssignment);

export default router;
