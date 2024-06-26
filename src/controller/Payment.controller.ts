import { Request, Response } from "express";
import { Pagamento, pagamentoOptions } from "../core/Pagamento/PagamentoUser";
import { MpPreferenceInterface } from "../core/dto/MpPayment.dto";
//
import ControllerBase from ".";
import * as up from '.'

class PaymentController extends ControllerBase {

  constructor(){  super() }


  async paymentMp(req: Request, res: Response) {
    
    const user_id = req['id']   

    const { title, description, quantity, unit_price } = req.body;

    const db = await up.Database()    
    const user = await db.findById(user_id)
    
    if(!user) return up.ReqRes.notFound(res, 'Usuário para pagamento não encontrado')

    const paymentMp: MpPreferenceInterface = {
      id: `${user_id}`,
      title,
      description:`${user.name}: ${description}`,
      quantity,
      unit_price,
      currency_id: "BRL",
    };

    // salva os dados de entrada do usuario no bd
    const paymentRespository =  await up.paymentRespository.create({
            user_id: user_id,
            title: paymentMp.title,
            quantity: paymentMp.quantity,
            currency_id: paymentMp.currency_id,
            unit_price: paymentMp.unit_price,
    })    

    res.status(201).json({ url_payment: paymentRespository });
    return;

    const pagar = new Pagamento(pagamentoOptions.MERCADO_PAGO);

    const result = await pagar.pay(paymentMp);

    res.status(201).json({ url_payment: result });
  }
}

export default new PaymentController();