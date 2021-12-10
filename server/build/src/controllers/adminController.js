"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const database_1 = __importDefault(require("../database"));
class AdminController {
    computers(req, res) {
        database_1.default.query('SELECT * FROM COMPUTERS', (err, result, fields) => {
            res.json(result);
        });
    }
    users(req, res) {
        database_1.default.query('SELECT * FROM USERS', (err, result, fields) => {
            res.json(result);
        });
    }
    activeUsers(req, res) {
        database_1.default.query('SELECT * FROM USERS WHERE user_status <> "CHECKED OUT" ', (err, result, fields) => {
            res.json(result);
        });
    }
    archivedUsers(req, res) {
        database_1.default.query('SELECT * FROM USERS WHERE user_status <> "" ', (err, result, fields) => {
            res.json(result);
        });
    }
    addComputer(req, res) {
        database_1.default.query('INSERT INTO COMPUTERS SET ? ', [req.body], (err, result, fields) => {
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
        database_1.default.query('SELECT * FROM COMPUTERS WHERE computer_id=?', [id], (err, result, fields) => {
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
    getUser(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT * FROM USERS WHERE user_id=?', [id], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
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
                res.json(result);
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
                res.json(result);
            }
        });
    }
}
exports.adminController = new AdminController();
