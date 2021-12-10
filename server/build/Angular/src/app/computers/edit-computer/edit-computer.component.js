"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditComputerComponent = void 0;
const core_1 = require("@angular/core");
const computer_model_1 = require("../computer.model");
let EditComputerComponent = class EditComputerComponent {
    constructor(route, computerService) {
        this.route = route;
        this.computerService = computerService;
        this.computer = new computer_model_1.Computer(0, '', '', '127.0.0.1');
        route.params.subscribe(params => { this.id = params['id']; });
        this.computerService.getComputer(this.id).subscribe((computer) => {
            console.log(computer);
            this.computer = computer[0];
        });
    }
    ngOnInit() {
    }
    Submit() {
        this.computerService.updateComputer(this.computer).subscribe(res => { console.log(res); });
        alert("Computer Updated Correctly");
    }
};
EditComputerComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-edit-computer',
        templateUrl: './edit-computer.component.html',
        styleUrls: ['./edit-computer.component.css']
    })
], EditComputerComponent);
exports.EditComputerComponent = EditComputerComponent;
