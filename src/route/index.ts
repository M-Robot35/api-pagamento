import { Request, Response, Router } from "express";
import scrapJobs from "./ScrapJobs.router";
import taskJobs from "./schundle.router";
import payment from "./payment.router";
//
import user from "./user.router";
import login from "./login.router";
//
import  "../core/entities/UserPaymentEntity";
import "../core/model/PaymentModel"

const router = Router();

router.get("/", async (req: Request, res: Response) => { 
  const {name, email, password} = req.body    
  
  const body = {
    name:'tu',
    email:'thiago',
    password:'tudo certo',
  }
  
    res.status(201).json({
    token:''
  })

});


router.use(login);
router.use(user);
router.use(scrapJobs);
router.use(taskJobs);
router.use(payment);


export default router;  