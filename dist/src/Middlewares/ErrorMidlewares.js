"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (error, req, res, next) => {
    console.error(error);
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({ message });
};
exports.default = errorHandlerMiddleware;
