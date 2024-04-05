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
exports.Pagamento = exports.pagamentoOptions = void 0;
const paymentMercadoPago_1 = require("../../libs/mercadoPago/paymentMercadoPago");
const Paypol_1 = require("../../libs/paypal/Paypol");
exports.pagamentoOptions = {
    'MERCADO_PAGO': new paymentMercadoPago_1.MercadoLivre(),
    "PAYPOL": new Paypol_1.Paypol()
};
class Pagamento {
    constructor(methodoPayment) {
        this.methodoPayment = methodoPayment;
    }
    pay(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.methodoPayment.pay(data);
        });
    }
    pix(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.methodoPayment.pix(data);
        });
    }
}
exports.Pagamento = Pagamento;
//# sourceMappingURL=PagamentoUser.js.map