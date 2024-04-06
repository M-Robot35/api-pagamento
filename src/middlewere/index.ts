import { jwtLogin, jwtToken, JwtDecode } from '../core/oauth/oauth'
import { z } from 'zod'
import { UserSearch } from '../core/database/interface-model/User.entity'
import { UserPrisma } from '../core/model/UserPrisma'

export const zod= ()=> z

export function zodParceError(data:any){
    let errors_ob = []
    data['error']['issues'].forEach(item => {
        const u = {}
        u[item['path'][0]]= item['message']     
        errors_ob.push(u)   
    })
    return errors_ob
}

//

export async function Database(){
    return new UserSearch(new UserPrisma)
  }


const configMiddleware = {
    zod: ()=> z,
    jwtLogin: async (payload:jwtToken):Promise<string> => await jwtLogin(payload),
    jwtDecode: async (token:string):Promise<jwtToken> => await JwtDecode(token)
}


abstract class BaseMiddleware {
    protected z=configMiddleware.zod()

    constructor(){
        this.z= configMiddleware.zod()
    }  

    protected async jwt_singIn(payload:jwtToken):Promise<string>{
        return await configMiddleware.jwtLogin(payload)
    }

    protected async jwt_decode(token:string){
        console.log(await configMiddleware.jwtDecode(token))
        return
    }
}


export default BaseMiddleware