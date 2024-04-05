import { User } from "./userInterface"

export interface IUser{
    all(): Promise<User[]>
    create(data:User)
    update(id:string|number, data:User):Promise<boolean>
    delete(id:string|number):Promise<boolean>
    findById(id:string|number):Promise<User>
    findByEmail(email:string):Promise<User>    
}

export class UserSearch {
    
    constructor(readonly instance:IUser){}

    async all(): Promise<User[]> {       
        return await this.instance.all()
    }

    async findById(id: string | number): Promise<User> {
        return await this.instance.findById(id)
    }

    async delete(id: string | number): Promise<boolean> {
        return await this.instance.delete(id)
    }

    async findByEmail(email: string): Promise<User> {
        return await this.instance.findByEmail(email)
    }

    async update(id: string | number, data:User): Promise<boolean> {
        return await this.instance.update(id, data)
    }

    async create(data:User){
        try{
            const verifyEmail = await this.instance.findByEmail(data.email)    
            if(verifyEmail.id ) return `O email já Existe`
            if(verifyEmail == undefined) return 'Implemente a função findByEmail'
        }catch(err){
            // pass
        }
                

        return await this.instance.create(data)
    }

}
