import { body, validationResult } from 'express-validator';

// Validation for User Registration
export const validateUserRegistration = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation for User Login
export const validateUserLogin = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

// Validation for Assignment Upload
export const validateAssignmentUpload = [
    body('task').notEmpty().withMessage('Task is required'),
    body('admin').notEmpty().withMessage('Admin ID is required'),
];

// Custom Validation Error Handler
export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
