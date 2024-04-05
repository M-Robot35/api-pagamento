"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoLivre = void 0;
const Mpconfig_1 = __importDefault(require("../../configServer/Mpconfig"));
const mercadopago_1 = __importStar(require("mercadopago"));
class MercadoLivre {
    constructor() {
        this.apiKeyMp = (0, Mpconfig_1.default)();
        this.client = new mercadopago_1.default({ accessToken: this.apiKeyMp.access_token, options: { timeout: 5000 } });
    }
    pix() {
        console.log(`Pagamento via MercadoLivre`);
    }
    pay(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentPrepare = [data];
            const PaymentCreate = this.filter(yield this.execPayment(paymentPrepare));
            console.log('TESTE PIX: ', PaymentCreate.sandbox_init_point); // ========== Apagar
            if (process.env.MP_STATUS === 'dev') {
                return PaymentCreate.sandbox_init_point;
            }
            if (process.env.MP_STATUS === 'prod') {
                return PaymentCreate.init_point;
            }
        });
    }
    execPayment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKeyMp.access_token)
                return null;
            const bodyPrepare = {
                body: {
                    items: data
                }
            };
            const preference = new mercadopago_1.Preference(this.client);
            const result = yield preference.create(bodyPrepare);
            if (!result.id) {
                throw new Error('Error Request Mercado Pago');
            }
            return yield result;
        });
    }
    filter(data) {
        return {
            id: data.id,
            init_point: data.init_point,
            sandbox_init_point: data.sandbox_init_point,
            date_created: data.date_created,
            items: data.items,
        };
    }
}
exports.MercadoLivre = MercadoLivre;
//# sourceMappingURL=paymentMercadoPago.js.map