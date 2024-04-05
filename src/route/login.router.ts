import { Router } from "express";
import LoginController from "../controller/Login.controller";
import OauthValidate from "../middlewere/Auth.middleware";
//

const  login= Router();

login.post("/login", OauthValidate.login, LoginController.singIn);

export default login;
