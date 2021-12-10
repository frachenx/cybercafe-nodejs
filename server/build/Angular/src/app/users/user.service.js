"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("src/environments/environment");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.baseUrl;
    }
    addUser(user) {
        return this.http.post(this.baseUrl + "users/add-user", user);
    }
    getUsers() {
        return this.http.get(this.baseUrl + "users.php");
    }
    getArchivedUsers() {
        return this.http.get(this.baseUrl + "archive-users.php");
    }
    getUser(id) {
        return this.http.get(this.baseUrl + "view-user.php?id=" + id);
    }
    searchUsers(search) {
        return this.http.get(this.baseUrl + "search-users.php?search=" + search);
    }
    usersReport(startDate, endDate) {
        console.log(`${this.baseUrl}report.php?start=${startDate}&end=${endDate}`);
        console.log(startDate);
        return this.http.get(`${this.baseUrl}report.php?start=${startDate}&end=${endDate}`);
    }
    updateUser(user) {
        return this.http.post(this.baseUrl + "update-user.php", user);
    }
};
UserService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], UserService);
exports.UserService = UserService;
