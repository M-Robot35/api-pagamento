
export type Mpconfig = {
    public_key:string|undefined
    access_token:string|undefined
    client_id?:string
    client_secret?:string

}

export default function MpConfig():Mpconfig{

    if(( process.env.MP_STATUS?.toLocaleLowerCase() ) === 'dev'){
        return {
            public_key: process.env.SANDBOX_PUBLIC_KEY,
            access_token: process.env.SANDBOX_ACCESS_TOKEN,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        }
    }

    if(( process.env.MP_STATUS?.toLocaleLowerCase() ) === 'prod'){
        return {
            public_key: process.env.PROD_PUBLIC_KEY,
            access_token: process.env.PROD_ACCESS_TOKEN,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        }
    }

   return {
        public_key: undefined,
        access_token: undefined
    }
}
 
