"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandler = void 0;
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
const responseHandler = (res, statusCode, status, message, data) => {
    if (data) {
        return res.status(statusCode).json({
            status: status,
            message: message,
            data: data,
        });
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
};
exports.responseHandler = responseHandler;
//# sourceMappingURL=errorHandler.js.map