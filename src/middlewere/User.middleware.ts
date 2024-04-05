import { Request, Response, NextFunction } from "express";
import ResponseRequest from "../helpers/ResponseRequest";
import BaseMiddleware from ".";
import { z } from "zod"
//
import * as main from "./index";


class UserMiddleware extends BaseMiddleware{

    constructor(){
        super()
    }    

    async UserCreate(req:Request, res:Response, next:NextFunction){
                
        const schemaCreate= z.object({
            name: z.string().trim().toLowerCase()
                .min(3,"Nome deve ter mais de 3 characteres")
                .max(20, "Nome deve ter no Maximo 20 characteres")
                .nullable(),
            
            email: z.string().trim().email("Tipo de E-mail inválido").toLowerCase(),
            
            password: z.string().trim()
                .min(8, 'Password, deve ser maior que 8 characteres')
                .max(50, 'Password, deve ser menor que 50 characteres')
        })   

        const validate= schemaCreate.safeParse(req.body)

        if(!validate['success']){            
            ResponseRequest.notFound(res, main.zodParceError(validate), 401)
            return            
        }     

        const lowCase= ['name', 'email']        
        lowCase.forEach(item => req.body[item] = req.body[item].toLowerCase())

        next()
    }

    



}


export default new UserMiddleware()