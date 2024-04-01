import { PagamentoInterface,user } from "../../core/abstract/payment"

import MpConfig, { Mpconfig } from "../../configServer/Mpconfig"
import { OutputPreferencFilter } from "./MpInterface"
import MercadoPagoConfig, {Preference} from "mercadopago"
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes"

//
import { MpPreferenceInterface } from "../../core/dto/MpPayment.dto"

export class MercadoLivre implements PagamentoInterface<MpPreferenceInterface>{

    private apiKeyMp:Mpconfig= MpConfig()
    private client:MercadoPagoConfig
    
    
    constructor(){ 
        this.client= new MercadoPagoConfig({ accessToken: this.apiKeyMp.access_token, options: { timeout: 5000 } });
    }

    pix(): void {
        console.log(`Pagamento via MercadoLivre`)
    }

    async pay(data:MpPreferenceInterface): Promise<void|string> {           
        const paymentPrepare= [data]
        
        const PaymentCreate = this.filter(await this.execPayment(paymentPrepare))

        console.log('TESTE PIX: ',PaymentCreate.sandbox_init_point)    // ========== Apagar

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