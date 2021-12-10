"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("src/environments/environment");
let ComputerService = class ComputerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.baseUrl;
    }
    addComputer(computer) {
        return this.http.post(this.baseUrl + "add-computer.php", computer);
    }
    getComputers() {
        return this.http.get(this.baseUrl + "computers.php");
    }
    getComputer(id) {
        return this.http.get(this.baseUrl + "edit-computer.php?id=" + id);
    }
    updateComputer(computer) {
        return this.http.post(this.baseUrl + "update-computer.php", computer);
    }
};
ComputerService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], ComputerService);
exports.ComputerService = ComputerService;
