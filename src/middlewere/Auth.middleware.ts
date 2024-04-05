import { Request, Response, NextFunction } from "express";
import ResponseRequest from "../helpers/ResponseRequest";
//
import BaseMiddleware from "./index";
import * as main from "./index";
//
import { JwtDecode } from "../core/oauth/oauth";
import { z } from 'zod'


class OauthValidate extends BaseMiddleware {
    
    login(req:Request, res:Response, next:NextFunction){        

        try{
            const schemaCreate= z.object({            
                email: z.string().trim().email("Tipo de E-mail inválido").toLowerCase(),
                
                password: z.string().trim().min(8).max(50)
            })        
            const validate= schemaCreate.safeParse(req.body)
    
            if(!validate['success']){            
                ResponseRequest.notFound(res, main.zodParceError(validate), 401)
                return            
            }     
            
            const lowCase= ['email']        
            lowCase.forEach(item => req.body[item] = req.body[item].toLowerCase())
    
            next()

        }catch(err){
            ResponseRequest.notFound(res, 'Server error')
        }
    }

    async validateUser(req:Request, res:Response, next:NextFunction){
        const { authorization } = req.headers

        const token = authorization.split(' ')[1]
        
        if(!token) return ResponseRequest.notFound(res, 'Sem autorização', 401)
        
        try{    
            const decodeToken = await JwtDecode(token)

            if(!decodeToken.id){
                return ResponseRequest.notFound(res, 'Sem autorização: Inválid Token', 401)
            }
            req['id'] = decodeToken.id

        }catch(err){
            return ResponseRequest.notFound(res, 'Sem autorização', 401)
        }

        next()
    }

}


export default new OauthValidate()
