"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = __importDefault(require("../controller/payment.controller"));
//
const payment = (0, express_1.Router)();
payment.post("/paymentmp", payment_controller_1.default.paymentMp);
exports.default = payment;
//# sourceMappingURL=payment.js.map