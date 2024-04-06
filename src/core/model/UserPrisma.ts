import prismaConnect from "../database/connect";
import { IUser } from "../database/interface-model/User.entity";
import { User } from "../database/interface-model/userInterface";


export class UserPrisma implements IUser{

    constructor(){
        
    }

    async all(): Promise<any[]> {
        const all = await prismaConnect.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                password:true,
                role:true
            }
        })

        return await all        
    }

    async delete(id: string | number): Promise<boolean> {
        try{
            const find =  await prismaConnect.user.delete({
                where:{
                    id: Number(id)
                }
            })
            return true

        }catch(err){
            return false
        }        
    }

    async findByEmail(email: string): Promise<User> {
        const find =  await prismaConnect.user.findUnique({
            where:{
                email:email
            },
            select:{
                id:true,
                email:true,
                name:true,
                password:true
            }
        })
        return find  
    }

    async findById(id: number): Promise<User> {
        const find =  await prismaConnect.user.findUnique({
            where:{
                id: Number(id)
            },
            select:{
                id:true,
                email:true,
                name:true,
                password:true
            }
        })
        return find        
    }

    async update(id: string | number, data:User): Promise<boolean> {

        try{
            const update = await prismaConnect.user.update({
                where:{
                    id:Number(id)
                },
                data:{
                    ...data
                }
            })
            return true

        }catch(err){
            return false
        }
        
    }

    async create(data:User){
        if(await this.findByEmail(data.email)){
            return 'Email já Existe'
        }

        try{
            return await prismaConnect.user.create({
                data,
                select:{
                    id:true,
                    name:true,
                    email:true,
                    role:true
                }
            })
        }catch(err){
            return data
        }
    }
} 