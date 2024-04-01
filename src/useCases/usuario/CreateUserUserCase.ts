interface UserCreate{
    nome:string
    email:string
    password:string
    refactory:boolean
}

abstract class CreateUser{
    abstract create():Promise<UserCreate>
    abstract desligar():void


}

export class CreateUserUser extends CreateUser{
    constructor(readonly user:UserCreate){
        super()
    }

    async create(): Promise<UserCreate> {
        
        return this.user
    }

    async save(){

    }
    desligar(): void {
        
    }


}

const xx:UserCreate = {
    nome:'thiago',
    email:'thiago.teles',
    password:'fdjalfjaljçal',
    refactory:false
}

const nada = new CreateUserUser(xx)
nada.create()