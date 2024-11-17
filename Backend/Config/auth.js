import jwt from 'jsonwebtoken';

export const generateToken = (userId , username) => {
    return jwt.sign({ id: userId, username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};
