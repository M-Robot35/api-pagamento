import { PagamentoInterface, user } from "../../core/abstract/payment"


export class Paypol implements PagamentoInterface<user>{    
   
    constructor(){}

    pay(data: user): void {
        console.log(data)       
        console.log(data.nome)
    }

    pix(data: user): void {
        
    }

    cartao(): void {
        
    }
}
