"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userAuth_1 = require("../controller/userAuth");
const userAuth_2 = require("../controller/userAuth");
exports.default = (router) => {
    router.post('/user/auth', userAuth_1.RegisterUser);
    router.post('/admin/auth', userAuth_1.registerAdmin);
    router.post('/user/login', userAuth_2.userLogin);
    router.post('/addStudent', userAuth_1.addStudent);
    router.put('/passwordReset/:id', userAuth_1.resetPassword);
};
//# sourceMappingURL=userAuth.js.map