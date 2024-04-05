import prismaConnect from "../connect"

export interface User {
    id?:number
    email:string
    name:string
    password:string
    password_confirm?:string   
    role?: "ADMIN" | "USER" 
}

export interface IUserCreate{
    email:string
    name:string
    password:string
}

export interface UserCreate{
    create(data:IUserCreate):Promise<User|string>
    findByEmail(email:string):Promise<boolean>
    save(data:IUserCreate):Promise<void>
}


export class CreateUser {
    private prisma= prismaConnect

    constructor(readonly instance:UserCreate){}

    async create(data: IUserCreate): Promise<User|string> {
        if(await this.verifyEmail(data.email)) return `O Email [ ${data.email} ] já existe`
        return await this.instance.create(data)
    }

    async findByEmail(email: string): Promise<boolean|string> {
        if(await this.verifyEmail(email)) return `O Email ${email} já existe`        
        return await this.instance.findByEmail(email)
    }

    async save(data:IUserCreate): Promise<void> {        
        return await this.instance.save(data)
    }

    private async verifyEmail(email: string){
        const resultEmail = await this.prisma.user.findFirst({
            where:{
                email
        }})        

        if(resultEmail){
            return true
        }        
        return false
    }

   
}