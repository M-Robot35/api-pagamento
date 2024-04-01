import { Router } from "express";
import paymentController from "../controller/payment.controller";

//
const payment = Router();

payment.post("/paymentmp", paymentController.paymentMp);

export default payment;
