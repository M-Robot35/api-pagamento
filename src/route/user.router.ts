import { Router } from "express";
import userController from "../controller/User.controller";
import UserMiddleware from "../middlewere/User.middleware";
import OauthValidate from "../middlewere/Auth.middleware";

//

const user = Router();

user.get("/all",OauthValidate.validateUser, userController.index);

user.get('/search/:id', OauthValidate.validateUser, userController.findById)

user.post("/create",  UserMiddleware.UserCreate, userController.create);

user.put("/update/:id",OauthValidate.validateUser, userController.updateUser);

user.delete("/delete/:id",OauthValidate.validateUser, userController.destroy);


export default user;