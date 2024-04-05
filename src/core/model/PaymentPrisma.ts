import prismaConnect from "../database/connect";
import { IUser } from "../database/interface-model/User.entity";
import { User } from "../database/interface-model/userInterface";
import { UserPaymentEntity,IUsePayment } from "../entities/UserPaymentEntity";
import { PaymentModel } from "./PaymentModel";

interface IPayment {
    create(data:any): Promise<any>
    findIdPayment(id:string|number):Promise<any>
}


export class PaymentPrisma implements IPayment{

 findIdPayment(id: string | number): Promise<any> {
     return
 }

    async create(data:IUsePayment){        
        const modelCreate = new PaymentModel({
            user_id: data.user_id,
            title: data.title,
            quantity: data.quantity,
            currency_id: data.currency_id,
            unit_price: data.unit_price,
        })

        try{
            return await prismaConnect.payment.create({
                data:{
                    user_id: modelCreate.get_user_id,
                    title: modelCreate.get_title,
                    quantity: modelCreate.get_quantity,
                    currency_id: modelCreate.get_currency_id,
                    unit_price: modelCreate.get_uni_price,
                    payment_id: "000",
                    total: modelCreate.total
                },

                select:{
                    id:true,
                    title:true,
                    quantity:true,
                    unit_price:true
                }
            })
        }catch(err){
            return data
        }
    }
} 