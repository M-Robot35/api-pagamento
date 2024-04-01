"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MpConfig() {
    var _a, _b;
    if (((_a = process.env.MP_STATUS) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === 'dev') {
        return {
            public_key: process.env.SANDBOX_PUBLIC_KEY,
            access_token: process.env.SANDBOX_ACCESS_TOKEN,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        };
    }
    if (((_b = process.env.MP_STATUS) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()) === 'prod') {
        return {
            public_key: process.env.PROD_PUBLIC_KEY,
            access_token: process.env.PROD_ACCESS_TOKEN,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        };
    }
    return {
        public_key: undefined,
        access_token: undefined
    };
}
exports.default = MpConfig;
//# sourceMappingURL=Mpconfig.js.map