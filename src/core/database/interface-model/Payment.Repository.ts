
export type CurrencyType= 'BRL'| 'ARS'| 'CLP'| 'MXN'| 'COP'| 'PEN'| 'UYU'

export interface IUsePayment {
    user_id:number
    title:string
    quantity:number
    unit_price:number
    currency_id: CurrencyType
}


interface IPayment {
    create(data:IUsePayment): Promise<any>
    findIdPayment(id:string|number):Promise<any>
}


export class PaymentRepository {

    constructor(private instance:IPayment){

    }

    async create(data: IUsePayment): Promise<any> {
        return this.instance.create(data)
    }

    async findIdPayment(id: string | number): Promise<any> {
        return this.instance.findIdPayment(id)
    }
}