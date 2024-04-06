import { Request, Response } from "express";
import { ControllerBase } from ".";
import * as up from '.'


class Notification extends ControllerBase {

  constructor(){  super()  }


  async index(req: Request, res: Response) {  

    // const db = await up.Database()
    // const all = await db.all()    

    const user = await up.findUserId(1)
    
    return await up.ReqRes.ok(res, user)    
  }



}
export default new Notification();


/**
 * -- pegar o status do apagamento do usuario
 *    se aparovado ele altera e permite o usuario a fazer oque foi pago
 * 
 * -- atualizar os status no banco de dados
 *      - STATUS
 * 
 * 
 * -- inputs
 *      - valor
 *      - descriçao
 *      - email
 * 
 * 
 * id na descriçaõ
 */





