import { Request, Response } from "express";
import {statusResponse} from "../helpers/ResponseRequest";
import * as up from '.'
import { ControllerBase } from ".";


class UserController extends ControllerBase {
  
  constructor(){ super() }


  async index(req: Request, res: Response) {  
    const db = await up.Database()
    const all = await db.all()     
    
    return await up.ReqRes.ok(res,all)    
  }


  async create( req: Request, res: Response ){
    const {name, email, password} = req.body  
    
    const criarUsuario = await up.Database()
    
    const response = await criarUsuario.create({
      name,
      email,
      password
    })

    response? up.ReqRes.ok(res, response, statusResponse.CREATED ) :
    up.ReqRes.notFound(res, "Usuário não Criado", statusResponse.NOT_FOUND )
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params; 
    const user_id = req['id']

    if(!id) return up.ReqRes.ok(res, 'Necessario ID', statusResponse.NOT_FOUND )

    const db= await up.Database()      

    const findOne = await db.findById(id)    

    return findOne? await up.ReqRes.ok(res, findOne)  :
          await up.ReqRes.notFound(res,'Usuário não encontrado'   )
  }



  async destroy( req: Request, res: Response ){
    const { id } = req.params
    const user_id = req['id']// apenas para validar o usuario, para fazer a requisição

    if(!id) return up.ReqRes.ok(res, 'Necessario ID', statusResponse.NOT_FOUND )

    const db= await up.Database()
      
    const deleteUser = await db.delete(id)

    deleteUser?
        await res.status(204).end():
        await res.status(404).end()    
  }



  async updateUser( req: Request, res: Response ){
    const { id } = req.params
    const user_id = req['id']

    if(!id) return up.ReqRes.ok(res, 'Necessario ID', statusResponse.NOT_FOUND )

    const db= await up.Database()
      
    const updateUser = await db.update(id, req.body)

    updateUser?
        await res.status(204).end():
        await res.status(404).end()  
  } 
}
export default new UserController();