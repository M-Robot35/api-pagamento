import { PagamentoInterface } from "../../core/abstract/payment"

import MpConfig, { Mpconfig } from "../../configServer/Mpconfig"
import { OutputPreferencFilter } from "./MpInterface"
import MercadoPagoConfig, { Preference, Payment } from "mercadopago"
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes"


//
import { MpPreferenceInterface, } from "../../core/dto/MpPayment.dto"

export interface IPixMp {
    transaction_amount:number
    description:string
    payment_method_id?:string
    email:string
}

export interface UPixResponse{
    payment_id: number
    status: string,
    currency_id : string
    description: string
    valor: number
    url_qrCode: string
    ticket_payment: string
    qr_code_b64: string
}

import { EventEmitter} from 'events'

/**
 * @emits PAYMENT_MP_PIX Envia os Dados pelo mercado pago ao fazer um pagamento pix 
 */
export const MercadoPagoEvents = new EventEmitter()



// -------------------------------------------------------------------
// ---------- Pagamento Mercado Pago ---------------------------------
// -------------------------------------------------------------------

export class MercadoLivre implements PagamentoInterface{

    private apiKeyMp:Mpconfig= MpConfig()
    private client:MercadoPagoConfig
    
    
    constructor(){ 
        this.client= new MercadoPagoConfig({ accessToken: this.apiKeyMp.access_token, options: { timeout: 5000 } });
    }

    async pix(data:IPixMp): Promise<UPixResponse> {     

        try{            
            const paymentMethods = new Payment(this.client);
            const resultPix = await paymentMethods.create({
                body: { 
                    transaction_amount: Number(data.transaction_amount),
                    description: data.description,
                    payment_method_id: 'pix',
                    payer: {
                        email: data.email,
                    }
                },                
            })

            return await this.filterPix(resultPix) 

        }catch(err){
            console.log(err)
            return null
        }       
    }

    
    private filterPix(data:any):UPixResponse{
        const filter = {
            payment_id: data.id,
            status: data.status,
            currency_id : data.currency_id,
            description: data.description,
            valor: data.transaction_amount,
            url_qrCode: data.point_of_interaction.transaction_data.qr_code,
            ticket_payment: data.point_of_interaction.transaction_data.ticket_url,
            qr_code_b64: data.point_of_interaction.transaction_data.qr_code_base64,
        }
        
        // mandar esses dados para o banco de dados via eventos
        MercadoPagoEvents.emit('PAYMENT_MP_PIX', filter)
        return filter
        
    }



    async pay(data:MpPreferenceInterface): Promise<void|string> {           
        const paymentPrepare= [data]
        
        const PaymentCreate = this.filter(await this.execPayment(paymentPrepare))

        if(process.env.MP_STATUS === 'dev'){
            return PaymentCreate.sandbox_init_point
        }

        if(process.env.MP_STATUS === 'prod'){
            return PaymentCreate.init_point
        }
    }

    private async execPayment(data:MpPreferenceInterface[]):Promise<PreferenceResponse | null>{
        if(!this.apiKeyMp.access_token) return null

        const bodyPrepare={
            body:{
                items: data
            }
        }
            
        const preference = new Preference(this.client);
        const result = await preference.create(bodyPrepare)
        
        if(!result.id){
            throw new Error('Error Request Mercado Pago')
        }
        return await result
    }

    /**
     * 
     * @param data Dados vindo do retorno API  Mercado Pago
     * @returns Retorna somente os campos necessarios 
     */
    private filter(data:any):OutputPreferencFilter{
        return {
            id: data.id,
            init_point: data.init_point,
            sandbox_init_point: data.sandbox_init_point,
            date_created: data.date_created,
            items: data.items,
        }
    }
}