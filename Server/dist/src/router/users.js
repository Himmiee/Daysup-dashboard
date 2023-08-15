"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../controller/users");
const authMiddleware_1 = require("../middleware/authMiddleware");
exports.default = (router) => {
    router.get('/users', users_1.getAllUsers);
    router.delete('/delete/:id', authMiddleware_1.verifyAdmin, users_1.deleteUser);
};
//# sourceMappingURL=users.js.map