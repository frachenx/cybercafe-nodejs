"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarComboComponent = void 0;
const core_1 = require("@angular/core");
let SidebarComboComponent = class SidebarComboComponent {
    constructor() { }
    ngOnInit() {
    }
    triggerDrop() {
        let dropC = document.querySelectorAll(".dropdown-container");
        let status = this.dropC.nativeElement.style.display;
        if (status === "") {
            this.dropC.nativeElement.style.display = "block";
        }
        else {
            this.dropC.nativeElement.style.display = "";
        }
    }
};
__decorate([
    (0, core_1.Input)()
], SidebarComboComponent.prototype, "items", void 0);
__decorate([
    (0, core_1.Input)()
], SidebarComboComponent.prototype, "mainTitle", void 0);
__decorate([
    (0, core_1.Input)()
], SidebarComboComponent.prototype, "icon", void 0);
__decorate([
    (0, core_1.ViewChild)("dropContainer")
], SidebarComboComponent.prototype, "dropC", void 0);
SidebarComboComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-sidebar-combo',
        templateUrl: './sidebar-combo.component.html',
        styleUrls: ['./sidebar-combo.component.css']
    })
], SidebarComboComponent);
exports.SidebarComboComponent = SidebarComboComponent;
