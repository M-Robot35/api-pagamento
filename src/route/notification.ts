import { Router } from "express";
import Notification from "../controller/Notification.controller";

//
const payment = Router();

payment.post("/paymentmp" ,Notification.index);

export default payment;