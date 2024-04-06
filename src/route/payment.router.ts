import { Router } from "express";
import paymentController from "../controller/Payment.controller";
import  PaymentMiddleware  from "../middlewere/Payment.middleware";
import OauthValidate from "../middlewere/Auth.middleware";

//
const payment = Router();

payment.post("/paymentmp", OauthValidate.validateUser ,PaymentMiddleware.paymentVerify ,paymentController.paymentMp);

payment.post("/paymentpix", OauthValidate.validateUser ,PaymentMiddleware.pixVerify ,paymentController.pix);

export default payment;