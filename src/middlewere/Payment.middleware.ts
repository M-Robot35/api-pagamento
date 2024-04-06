import BaseMiddleware from "./index";
import * as main from "./index";

import { Request, Response, NextFunction } from "express";
import ResponseRequest from "../helpers/ResponseRequest";
import { z } from "zod"


class PaymentMiddleware extends BaseMiddleware {
    
    constructor(){
        super()
    }

    paymentVerify(req:Request, res:Response, next:NextFunction){
        
        const schemaCreate= z.object({
            title: z.string().trim().toLowerCase()
                .min(3,"Title deve ter mais de 3 characteres")
                .max(20, "Title deve ter no Maximo 20 characteres")
                .nullable(),

            description: z.string().trim().toLowerCase()
                .min(3,"Description deve ter mais de 3 characteres")
                .max(20, "Description deve ter no Maximo 20 characteres")
                .nullable(),
                
            quantity: z.number(),

            unit_price: z.number(),
        })   
        
        const validate = schemaCreate.safeParse(req.body)

        if(!validate['success']){
            const response=  main.zodParceError(validate)
            ResponseRequest.notFound(res, response, 401)
            return 
        }        
        next()
    }

    pixVerify(req:Request, res:Response, next:NextFunction){
        
        const schemaCreate= z.object({

            description: z.string().trim().toLowerCase()
                .min(3,"Description deve ter mais de 3 characteres")
                .max(20, "Description deve ter no Maximo 20 characteres")
                .nullable(),
                
            transaction_amount: z.number(),

            email: z.string().trim().email('Formato de email, inválido '),
        })   
        
        const validate = schemaCreate.safeParse(req.body)

        if(!validate['success']){
            const response=  main.zodParceError(validate)
            ResponseRequest.notFound(res, response, 401)
            return 
        }        
        next()
    }
}

export default new PaymentMiddleware()