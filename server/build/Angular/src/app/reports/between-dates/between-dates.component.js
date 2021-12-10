"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetweenDatesComponent = void 0;
const core_1 = require("@angular/core");
let BetweenDatesComponent = class BetweenDatesComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
    }
    submit() {
        // this.dateStart = this.dateStart.substring(8, 10) + "-" + this.dateStart.substring(5, 7) + "-" + this.dateStart.substring(0, 4)
        // this.dateEnd = this.dateEnd.substring(8, 10) + "-" + this.dateEnd.substring(5, 7) + "-" + this.dateEnd.substring(0, 4)
        this.userService.usersReport(this.dateStart, this.dateEnd).subscribe((users) => {
            this.users = users;
        });
    }
};
BetweenDatesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-between-dates',
        templateUrl: './between-dates.component.html',
        styleUrls: ['./between-dates.component.css']
    })
], BetweenDatesComponent);
exports.BetweenDatesComponent = BetweenDatesComponent;
