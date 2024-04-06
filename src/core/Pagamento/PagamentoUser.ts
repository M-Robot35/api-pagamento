import { MercadoLivre } from "../../libs/mercadoPago/paymentMercadoPago"
import { Paypol } from "../../libs/paypal/Paypol"
import { PagamentoInterface, user } from "../abstract/payment"

export const pagamentoOptions={
    'MERCADO_PAGO' : new MercadoLivre(),
    "PAYPOL": new Paypol()
}

export class Pagamento<P>{ 
    constructor(readonly methodoPayment:PagamentoInterface ){}
  
    async pay<P>(data:P){
        return await this.methodoPayment.pay(data)
    }
  
    async pix<T>(data: T):Promise<string|void> {      
      return await this.methodoPayment.pix(data)
    }
  }
  