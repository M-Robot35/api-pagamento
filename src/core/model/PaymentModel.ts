import { UserPaymentEntity, IUsePayment } from "../entities/UserPaymentEntity"


export class PaymentModel extends UserPaymentEntity{

    constructor(payload:IUsePayment){
        super(
            payload.user_id, 
            payload.title, 
            payload.quantity, 
            payload.unit_price, 
            payload.currency_id
        )
    }
}