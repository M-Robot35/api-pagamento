import { Request, Response } from "express";
import { jwtLogin } from "../core/oauth/oauth";
//
import ControllerBase from ".";
import * as up from '.'


class LoginController extends ControllerBase{

  async singIn(req: Request, res: Response) {
    const { email, password } = req.body
    
    const user = await up.Database()
    const result = await user.findByEmail(email)

    if(!result){
        return up.ReqRes.notFound(res, 'email ou senha inválidos')
    }

    if(result['password'] != password){
        return up.ReqRes.notFound(res, 'email ou senha inválidos')
    }

    const token= await jwtLogin({
        id: result['id'],
        role: result['role']
    })
    delete result['id']

    up.ReqRes.ok(res,{...result, token} ) 
  }
}

export default new LoginController(); 


/**
 * FAZER HASH DA SENHA E SALVAR NO BANCO DE DADOS
 * 
 */