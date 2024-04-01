import { Request, Response } from "express";
import { Pagamento, pagamentoOptions } from "../core/Pagamento/PagamentoUser";
import { MpPreferenceInterface } from "../core/dto/MpPayment.dto";

class PaymentController {
  async paymentMp(req: Request, res: Response) {
    const { title, description, quantity, unit_price } = req.body;

    // conseguir um id de usuario para indentificação de pagamento
    // seja o número do usuario ou algum alteticado no programa BD

    const paymentMp: MpPreferenceInterface = {
      id: "id do usuário",
      title,
      description,
      quantity,
      unit_price,
      currency_id: "BRL",
    };
    console.log("xxxx");
    res.status(201).json({ url_payment: "ok" });
    return;

    const pagar = new Pagamento(pagamentoOptions.MERCADO_PAGO);

    const result = await pagar.pay(paymentMp);

    res.status(201).json({ url_payment: result });
  }
}

export default new PaymentController();
