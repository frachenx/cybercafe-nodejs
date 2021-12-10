"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewUserComponent = void 0;
const core_1 = require("@angular/core");
let ViewUserComponent = class ViewUserComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.userService.getUser(this.id).subscribe((users) => {
            this.user = users[0];
            this.user.status === "" ? this.checkedOut = false : this.checkedOut = true;
        });
    }
    ngOnInit() {
    }
    update() {
        this.userService.updateUser(this.user).subscribe(res => console.log(res));
        this.checkedOut = true;
        alert("User Updated Correctly");
    }
};
ViewUserComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-view-user',
        templateUrl: './view-user.component.html',
        styleUrls: ['./view-user.component.css']
    })
], ViewUserComponent);
exports.ViewUserComponent = ViewUserComponent;
