import  prismaConnect from "../database/connect";
import { UserCreate, IUserCreate, User } from "../database/interface-model/userInterface";


export class PrismaCreateUser implements UserCreate {
    private connect
    private checkConnection:boolean

    constructor(){
        this.connect = prismaConnect        
        this.checkConnection= this.checkConn()
    }

    private checkConn():boolean{        
        if(this.connect === null) {
            console.log('Connexão com banco de  dados prisma FAIL')
            throw new Error('Falha ao Connectar ao BD Prisma')
        }
        return true
    }
    
    async create(data: IUserCreate): Promise<string | User> {
        const email = await this.findByEmail(data.email)
        
        if(email){
            return "Email já existe"
        }

        return await this.save(data)  
    }

    async findByEmail(email: string): Promise<boolean> {
        const resultEmail = await this.connect.user.findFirst({
            where:{
                email
        }})        

        if(resultEmail){
            return true
        }
        return false
    }

    async save(data: IUserCreate): Promise<any> {
        const criar = await this.connect.user.create({
            data:{
                email:data.email,
                name:data.name,
                password:data.password
            }
        })

        return criar
    }

}