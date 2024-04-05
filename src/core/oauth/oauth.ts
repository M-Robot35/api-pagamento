import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";


export interface jwtToken{
    id:string|number
    role?:string
}


// Bcrypt start
export const bcryptCheckedHash = async (password, hash):Promise<boolean> =>{
    const check = await bcrypt.compare(password, hash);
    return check
}


export const bcryptHashPassword= async (password:string): Promise<string>=>{
    const saltRounds = Number(process.env.BCRYPT_SAULT)?? 10;    
    const salt = await bcrypt.genSaltSync(saltRounds);    
    const hash = await bcrypt.hashSync(password, salt);    
    return hash
}
// Bcrypt end


// JWT Start
/**
 * 
 * @param payload 
 * @returns 
 */
export const  jwtLogin = async  (payload:jwtToken)=>{
    const privateKey= process.env.JWT_SECRET_KEY || 'secret'
    const expiration = process.env.JWT_EXPIRATION || '1h'

    const login= await jwt.sign({
        data: payload
      }, privateKey, { expiresIn: expiration })
    return login
}

/**
 * 
 * @param token token vindo do usuário
 * @example
 * payload = { 
 *      "id": "1",
 *      "role": "ADMIN" 
 * }
 * @returns JwtToken
 */
export const JwtDecode= async (token:string):Promise<jwtToken> =>{
    const privateKey= process.env.JWT_SECRET_KEY || 'secret'
    const tokenVerity= await  jwt.verify(token, privateKey, {complete:true});
    return tokenVerity['payload']['data']
}

// JWT End

