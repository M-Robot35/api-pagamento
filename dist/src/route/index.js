"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ScrapJobs_1 = __importDefault(require("./ScrapJobs"));
const schundle_1 = __importDefault(require("./schundle"));
const payment_1 = __importDefault(require("./payment"));
//
require("../controller/teste.dto"); // apagar
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    function teste() {
        return ["1", "2", "3"];
    }
    const x = teste();
    console.log(x);
    res.send("tudo ok Teste ONLINE");
});
router.use(ScrapJobs_1.default);
router.use(schundle_1.default);
router.use(payment_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map