import express  from "express"
import { Response } from "express"

// export const serverErrorResponse = (err: unknown): string => {
//     let errMsg: string;
//     if (err instanceof Error) {
//       errMsg = err.message;
//       return errMsg;
//     } else {
//       errMsg = String(err);
//       return errMsg;
//     }
//   }

export const responseHandler = (
    res: Response,
    statusCode: number,
    status?: string,
    message?: string,
    data?: any
  ) => {
    if (data) {
        return res.status(statusCode).json({
            status: status,
            message: message,
            data: data,
      
        })
    }
    if (!message) {
        return res.status(statusCode).json({
          status: status,
          data: data,
        });
      }
      if (!status) {
        return res.status(statusCode).json({
          message: message,
        });
      }
      return res.status(statusCode).json({
        status: status,
        message: message,
      });
  }