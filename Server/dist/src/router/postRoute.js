"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = require("../middleware/authMiddleware");
const messages_1 = require("../controller/messages");
exports.default = (router) => {
    router.post("/news/", authMiddleware_1.verifyAdmin, messages_1.announcement);
    router.post("/leave/", messages_1.leaveNote);
    router.get("/leave/:email", messages_1.viewLeave);
    router.get("/leaveList/", messages_1.viewAllLeave);
    router.put("/updateLeaveStatus/:id", messages_1.UpdateLeave);
    router.delete("/deleteLeave/:id", messages_1.deleteLeave);
};
//# sourceMappingURL=postRoute.js.map