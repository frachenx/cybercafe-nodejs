"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageComputersComponent = void 0;
const core_1 = require("@angular/core");
let ManageComputersComponent = class ManageComputersComponent {
    constructor(computerService) {
        this.computerService = computerService;
        this.computers = [];
    }
    ngOnInit() {
        this.computerService.getComputers().subscribe((computers) => {
            this.computers = computers;
        });
        // this.computerService.getComputers().subscribe(res=>{console.log(res)});    
    }
};
ManageComputersComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-manage-computers',
        templateUrl: './manage-computers.component.html',
        styleUrls: ['./manage-computers.component.css']
    })
], ManageComputersComponent);
exports.ManageComputersComponent = ManageComputersComponent;
