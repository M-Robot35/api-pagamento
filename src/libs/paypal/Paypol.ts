import { PagamentoInterface, user } from "../../core/abstract/payment"


export class Paypol implements PagamentoInterface{    
   
    constructor(){}

    pay(data: user): void {
        console.log(data)       
        console.log(data.nome)
    }

    pix(data: user) {
        console.log('Paypol NÃO IMPLEMENTADO')       
        return 'PAYPOL'
    }

    cartao(): void {
        
    }
}