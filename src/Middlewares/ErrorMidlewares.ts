import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  statusCode?: number;
}

const errorHandlerMiddleware = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  return res.status(statusCode).json({ message });
};

export default errorHandlerMiddleware;