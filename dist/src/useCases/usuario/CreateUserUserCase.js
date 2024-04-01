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
exports.CreateUserUser = void 0;
class CreateUser {
}
class CreateUserUser extends CreateUser {
    constructor(user) {
        super();
        this.user = user;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.user;
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    desligar() {
    }
}
exports.CreateUserUser = CreateUserUser;
const xx = {
    nome: 'thiago',
    email: 'thiago.teles',
    password: 'fdjalfjaljçal',
    refactory: false
};
const nada = new CreateUserUser(xx);
nada.create();
//# sourceMappingURL=CreateUserUserCase.js.map