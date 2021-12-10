"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, address, mobile, email, computer, idProof, inTime, outTime, status, fee, remark) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.mobile = mobile;
        this.email = email;
        this.computer = computer;
        this.idProof = idProof;
        this.inTime = inTime;
        this.outTime = outTime;
        this.status = status;
        this.fee = fee;
        this.remark = remark;
    }
}
exports.User = User;
