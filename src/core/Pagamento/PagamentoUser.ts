import { MercadoLivre } from "../../libs/mercadoPago/paymentMercadoPago"
import { Paypol } from "../../libs/paypal/Paypol"
import { PagamentoInterface, user } from "../abstract/payment"

export const pagamentoOptions={
    'MERCADO_PAGO' : new MercadoLivre(),
    "PAYPOL": new Paypol()
}

export class Pagamento<P>{ 
    constructor(readonly methodoPayment:PagamentoInterface<P>){}
  
    async pay(data:P){
        return await this.methodoPayment.pay(data)
    }
  
    async pix(data: P):Promise<string|void> {
      return await this.methodoPayment.pix(data)
    }
  }
  