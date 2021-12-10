"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const database_1 = __importDefault(require("../database"));
class AdminController {
    computers(req, res) {
        database_1.default.query('SELECT computer_id As id, computer_name As name,computer_location As location,computer_ip As ip FROM COMPUTERS', (err, result, fields) => {
            res.json(result);
        });
    }
    users(req, res) {
        database_1.default.query('SELECT * FROM USERS', (err, result, fields) => {
            let userArray = Array();
            ;
            result.forEach((row) => {
                userArray.push({
                    id: row.user_id,
                    name: row.user_name,
                    address: row.user_address,
                    mobile: row.user_number,
                    email: row.user_email,
                    computer: row.computer_id,
                    idProof: row.user_id_proof,
                    inTime: row.user_in_time,
                    outTime: row.user_out_time,
                    status: row.user_status,
                    fee: row.user_fee,
                    remark: row.user_remark,
                });
            });
            res.json(userArray);
        });
    }
    activeUsers(req, res) {
        database_1.default.query('SELECT * FROM USERS WHERE user_status <> "CHECKED OUT" ', (err, result, fields) => {
            let userArray = Array();
            ;
            result.forEach((row) => {
                userArray.push({
                    id: row.user_id,
                    name: row.user_name,
                    address: row.user_address,
                    mobile: row.user_number,
                    email: row.user_email,
                    computer: row.computer_id,
                    idProof: row.user_id_proof,
                    inTime: row.user_in_time,
                    outTime: row.user_out_time,
                    status: row.user_status,
                    fee: row.user_fee,
                    remark: row.user_remark,
                });
            });
            res.json(userArray);
        });
    }
    archivedUsers(req, res) {
        database_1.default.query('SELECT * FROM USERS WHERE user_status <> "" ', (err, result, fields) => {
            let userArray = Array();
            ;
            result.forEach((row) => {
                userArray.push({
                    id: row.user_id,
                    name: row.user_name,
                    address: row.user_address,
                    mobile: row.user_number,
                    email: row.user_email,
                    computer: row.computer_id,
                    idProof: row.user_id_proof,
                    inTime: row.user_in_time,
                    outTime: row.user_out_time,
                    status: row.user_status,
                    fee: row.user_fee,
                    remark: row.user_remark,
                });
            });
            res.json(userArray);
        });
    }
    addComputer(req, res) {
        database_1.default.query('INSERT INTO COMPUTERS SET (computer_name,computer_location,computer_ip) VALUES() ', [req.body.name, req.body.location, req.body.ip], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                if (result.affectedRows == '1') {
                    res.json({ id: result.insertId, response: true });
                }
            }
        });
    }
    updateComputer(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE COMPUTERS SET computer_name=?,computer_location=?,computer_ip=? WHERE computer_id=?', [req.body.name, req.body.location, req.body.ip, id], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                if (result.affectedRows == '1') {
                    res.json({ id: result.insertId, response: true });
                }
            }
        });
    }
    getComputer(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT computer_id As id, computer_name As name,computer_location As location,computer_ip As ip FROM COMPUTERS WHERE computer_id=?', [id], (err, result, fields) => {
            res.json(result);
        });
    }
    addUser(req, res) {
        database_1.default.query('INSERT INTO USERS (user_name,user_address,user_number,user_email,computer_id,user_id_proof,user_in_time,user_out_time,user_status,user_fee,user_remark) VALUES(?,?,?,?,?,?,?,?,?,?,?)  ', [req.body.name, req.body.address, req.body.mobile, req.body.email, req.body.computer, req.body.idProof, req.body.inTime, req.body.outTime, req.body.status, req.body.fee, req.body.remark], (err, result, field) => {
            if (err) {
                res.json(err);
            }
            else {
                if (result.affectedRows == '1') {
                    res.json({ id: result.insertId, response: true });
                }
            }
        });
    }
    updateUser(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE USERS SET user_name=?,user_address=?,user_number=?,user_email=?,computer_id=?,user_id_proof=?,user_in_time=?,user_out_time=?,user_status=?,user_fee=?,user_remark=? WHERE user_id=?', [req.body.name, req.body.address, req.body.mobile, req.body.email, req.body.computer, req.body.idProof, req.body.inTime, req.body.outTime, req.body.status, req.body.fee, req.body.remark, id], (err, result, field) => {
            if (err) {
                res.json(err);
            }
            else {
                if (result.affectedRows == '1') {
                    res.json({ id: result.insertId, response: true });
                }
            }
        });
    }
    getUser(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT * FROM USERS WHERE user_id=?', [id], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                let userArray = Array();
                ;
                result.forEach((row) => {
                    userArray.push({
                        id: row.user_id,
                        name: row.user_name,
                        address: row.user_address,
                        mobile: row.user_number,
                        email: row.user_email,
                        computer: row.computer_id,
                        idProof: row.user_id_proof,
                        inTime: row.user_in_time,
                        outTime: row.user_out_time,
                        status: row.user_status,
                        fee: row.user_fee,
                        remark: row.user_remark,
                    });
                });
                res.json(userArray);
            }
        });
    }
    getUserByName(req, res) {
        const { name } = req.params;
        database_1.default.query('SELECT * FROM USERS WHERE user_name LIKE ?', [name + '%'], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                let userArray = Array();
                ;
                result.forEach((row) => {
                    userArray.push({
                        id: row.user_id,
                        name: row.user_name,
                        address: row.user_address,
                        mobile: row.user_number,
                        email: row.user_email,
                        computer: row.computer_id,
                        idProof: row.user_id_proof,
                        inTime: row.user_in_time,
                        outTime: row.user_out_time,
                        status: row.user_status,
                        fee: row.user_fee,
                        remark: row.user_remark,
                    });
                });
                res.json(userArray);
            }
        });
    }
    getUsersBetweenDates(req, res) {
        const { start } = req.params;
        const { end } = req.params;
        database_1.default.query('SELECT * FROM USERS WHERE user_in_time BETWEEN ? AND ? ', [start, end], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                let userArray = Array();
                ;
                result.forEach((row) => {
                    userArray.push({
                        id: row.user_id,
                        name: row.user_name,
                        address: row.user_address,
                        mobile: row.user_number,
                        email: row.user_email,
                        computer: row.computer_id,
                        idProof: row.user_id_proof,
                        inTime: row.user_in_time,
                        outTime: row.user_out_time,
                        status: row.user_status,
                        fee: row.user_fee,
                        remark: row.user_remark,
                    });
                });
                res.json(userArray);
            }
        });
    }
}
exports.adminController = new AdminController();
