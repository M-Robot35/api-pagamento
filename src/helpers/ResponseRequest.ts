import { Response } from "express";

interface IResponseRequest{
    ok(msg:any|object, status:number):void
    notFound(msg:any|object, status:number):void
    unothorized(msg:any|object, status:number):void
}


export enum statusResponse {
    "OK"= 200,
    "NOT_FOUND"= 404,
    "UNAUTHORIZED"= 401,
    "CREATED"= 201,
    "NOT_CONTENT"= 204,
}


class ResponseReques implements IResponseRequest{
    r

    ok(response:Response, msg: any, status:statusResponse=statusResponse.OK): Response {
       
        return response.status(status).json({
            error: false,            
            data:msg
        })
    }

    notFound(response:Response,msg: any, status:statusResponse=statusResponse.NOT_FOUND): Response {
        return response.status(status).json({
            error: true,            
            data:msg
        })
    }

    unothorized(response:Response,msg: any, status:statusResponse=statusResponse.UNAUTHORIZED): Response {
        return response.status(status).json({
            error: true,            
            data:msg
        })
    }

    noBody(response:Response,msg: any, status:statusResponse=statusResponse.NOT_CONTENT): Response {
        return response.status(status).end()
    }

}

export default new ResponseReques()