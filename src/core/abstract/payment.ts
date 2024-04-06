export interface user{
    nome:string
    email:string
    senha:string
}

export abstract class PagamentoInterface {     

    constructor(){ }

    abstract pay(data):void

    abstract pix?(data):void

    cartao?(){
        
    }
}