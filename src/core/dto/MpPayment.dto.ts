import { MpCurrencyType } from "../../libs/mercadoPago/MpInterface"

export interface MpPreferenceInterface{
    id:string
    title:string
    description:string
    quantity:number
    unit_price:number
    currency_id:MpCurrencyType
}