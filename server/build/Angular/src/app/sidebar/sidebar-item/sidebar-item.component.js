"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarItemComponent = void 0;
const core_1 = require("@angular/core");
let SidebarItemComponent = class SidebarItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    (0, core_1.Input)()
], SidebarItemComponent.prototype, "url", void 0);
__decorate([
    (0, core_1.Input)()
], SidebarItemComponent.prototype, "icon", void 0);
__decorate([
    (0, core_1.Input)()
], SidebarItemComponent.prototype, "title", void 0);
SidebarItemComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-sidebar-item',
        templateUrl: './sidebar-item.component.html',
        styleUrls: ['./sidebar-item.component.css']
    })
], SidebarItemComponent);
exports.SidebarItemComponent = SidebarItemComponent;
