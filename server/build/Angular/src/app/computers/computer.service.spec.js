"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const computer_service_1 = require("./computer.service");
describe('ComputerService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(computer_service_1.ComputerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
