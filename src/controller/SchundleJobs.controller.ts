import { Request, Response } from "express";
import { jobTime } from "../helpers/cronJobs";
import { CronInterface } from "../core/dto/cron.dto";
import { ControllerBase } from ".";

export interface CronInterfaceDTO {
  datetime:string
  message: string
}

class SchundleJobs extends ControllerBase {

  async executeJobs(req: Request, res: Response) {
    const { datetime, mensagem } = req.body;
    
    const teste: CronInterface = (args) => console.log("tudo certo kraio: => ",args);
    
    const time = await jobTime(datetime, teste, {
      nome: "Thiago Teles ownit",
      time: datetime,
      mensagem
    });    

    res.json(time);
    
    res.json({type: 'tudo certo - SchundleJobs'})
  }
}

export default new SchundleJobs();