export interface user{
    nome:string
    email:string
    senha:string
}

export abstract class PagamentoInterface<T> {     

    constructor(){ }

    abstract pay(data:T):void|void

    abstract pix?(data:T):void|void

    cartao?(){
        
    }
}