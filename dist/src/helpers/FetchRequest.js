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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRequest = void 0;
const axios_1 = __importDefault(require("axios"));
class FetchRequest {
    constructor(url, option) {
        this.url = url;
        this.autorization = option['autorization'];
        this.checked();
    }
    checked() {
        const urlRegex = /^https?:\/\//g;
        if (!urlRegex.test(this.url)) {
            throw new Error('URL inválida..!');
        }
    }
    get() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.url, { data: (_a = this.body) !== null && _a !== void 0 ? _a : null,
                headers: {
                    'Authorization': this.autorization ? `Bearer ${this.autorization}` : null
                } });
            return yield response.data;
        });
    }
    post() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(this.url, { data: (_a = this.body) !== null && _a !== void 0 ? _a : null,
                headers: {
                    'Authorization': this.autorization ? `Bearer ${this.autorization}` : null
                } });
            return response.data;
        });
    }
    put() {
    }
    patch() {
    }
    delete(id) {
    }
    update(id) {
    }
}
exports.FetchRequest = FetchRequest;
//# sourceMappingURL=FetchRequest.js.map