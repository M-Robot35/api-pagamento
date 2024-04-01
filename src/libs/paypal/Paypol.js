"use strict";
exports.__esModule = true;
exports.Paypol = void 0;
var Paypol = /** @class */ (function () {
    function Paypol() {
    }
    Paypol.prototype.pay = function (data) {
        console.log(data);
        console.log(data.nome);
    };
    Paypol.prototype.pix = function (data) {
    };
    Paypol.prototype.cartao = function () {
    };
    return Paypol;
}());
exports.Paypol = Paypol;
