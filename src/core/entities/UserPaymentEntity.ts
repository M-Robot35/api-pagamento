import { MpCurrencyType } from "../../libs/mercadoPago/MpInterface"

export interface IUsePayment {
    user_id:number
    title:string
    quantity:number
    unit_price:number
    currency_id: MpCurrencyType
    payment_id?:string
    total?:number
}


export abstract class UserPaymentEntity {    
    checke_ok:boolean= this.checke()
    total:number= this.checkTotal()
    
    constructor(
        private user_id:number, 
        private title:string, 
        private quantity:number, 
        private unit_price:number, 
        private currency_id:MpCurrencyType
        ){
    }    

    private checke():boolean{
        this.user_id

        return true
    }

    private checkTotal():number{
        return this.unit_price * this.quantity
    }

    get get_user_id(){ return this.user_id }

    get get_title(){ return this.title }   

    get get_quantity(){ return this.quantity }   

    get get_uni_price(){ return this.unit_price }   

    get get_currency_id(){ return this.currency_id }   

}



