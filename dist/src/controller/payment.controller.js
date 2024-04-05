"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PagamentoUser_1 = require("../core/Pagamento/PagamentoUser");
class PaymentController {
    paymentMp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, quantity, unit_price } = req.body;
            // conseguir um id de usuario para indentificação de pagamento
            // seja o número do usuario ou algum alteticado no programa BD
            const paymentMp = {
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
            const pagar = new PagamentoUser_1.Pagamento(PagamentoUser_1.pagamentoOptions.MERCADO_PAGO);
            const result = yield pagar.pay(paymentMp);
            res.status(201).json({ url_payment: result });
        });
    }
}
exports.default = new PaymentController();
//# sourceMappingURL=payment.controller.js.map