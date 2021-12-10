"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
class AdminRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/computers', adminController_1.adminController.computers);
        this.router.post('/computers/add-computer', adminController_1.adminController.addComputer);
        this.router.get('/computers/:id', adminController_1.adminController.getComputer);
        this.router.get('/users', adminController_1.adminController.users);
        this.router.get('/users/active-users', adminController_1.adminController.activeUsers);
        this.router.get('/users/archived-users', adminController_1.adminController.archivedUsers);
        this.router.post('/users/add-user', adminController_1.adminController.addUser);
        this.router.get('/users/:id', adminController_1.adminController.getUser);
        this.router.get('/users/search/:name', adminController_1.adminController.getUserByName);
        this.router.get('/users/:start/:end', adminController_1.adminController.getUsersBetweenDates);
    }
}
const adminRouter = new AdminRoutes();
exports.default = adminRouter.router;
