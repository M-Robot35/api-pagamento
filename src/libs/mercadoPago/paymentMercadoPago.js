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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MercadoLivre = void 0;
var Mpconfig_1 = require("../../configServer/Mpconfig");
var mercadopago_1 = require("mercadopago");
var MercadoLivre = /** @class */ (function () {
    function MercadoLivre() {
        this.apiKeyMp = (0, Mpconfig_1["default"])();
        this.client = new mercadopago_1["default"]({ accessToken: this.apiKeyMp.access_token, options: { timeout: 5000 } });
    }
    MercadoLivre.prototype.pix = function () {
        console.log("Pagamento via MercadoLivre");
    };
    MercadoLivre.prototype.pay = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var paymentPrepare, PaymentCreate, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        paymentPrepare = [data];
                        _a = this.filter;
                        return [4 /*yield*/, this.execPayment(paymentPrepare)];
                    case 1:
                        PaymentCreate = _a.apply(this, [_b.sent()]);
                        console.log('TESTE PIX: ', PaymentCreate.sandbox_init_point); // ========== Apagar
                        if (process.env.MP_STATUS === 'dev') {
                            return [2 /*return*/, PaymentCreate.sandbox_init_point];
                        }
                        if (process.env.MP_STATUS === 'prod') {
                            return [2 /*return*/, PaymentCreate.init_point];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MercadoLivre.prototype.execPayment = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var bodyPrepare, preference, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.apiKeyMp.access_token)
                            return [2 /*return*/, null];
                        bodyPrepare = {
                            body: {
                                items: data
                            }
                        };
                        preference = new mercadopago_1.Preference(this.client);
                        return [4 /*yield*/, preference.create(bodyPrepare)];
                    case 1:
                        result = _a.sent();
                        if (!result.id) {
                            throw new Error('Error Request Mercado Pago');
                        }
                        return [4 /*yield*/, result];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MercadoLivre.prototype.filter = function (data) {
        return {
            id: data.id,
            init_point: data.init_point,
            sandbox_init_point: data.sandbox_init_point,
            date_created: data.date_created,
            items: data.items
        };
    };
    return MercadoLivre;
}());
exports.MercadoLivre = MercadoLivre;
