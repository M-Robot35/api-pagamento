

//   "back_urls": {},
//   "differential_pricing": {
//     "id": null
//   },
//   "expires": false,
//   "items": [
//     {
//       "title": "Dummy Title",
//       "description": "Dummy description",
//       "picture_url": "http://www.myapp.com/myimage.jpg",
//       "category_id": "car_electronics",
//       "quantity": 1,
//       "currency_id": "U$",
//       "unit_price": 10
//     }
//   ],
//   "marketplace_fee": null,
//   "metadata": null,
//   "payer": {
//     "phone": {
//       "number": null
//     },
//     "identification": {},
//     "address": {
//       "street_number": null
//     }
//   },
//   "payment_methods": {
//     "excluded_payment_methods": [
//       {}
//     ],
//     "excluded_payment_types": [
//       {}
//     ],
//     "installments": null,
//     "default_installments": null
//   },
//   "shipments": {
//     "local_pickup": false,
//     "default_shipping_method": null,
//     "free_methods": [
//       {
//         "id": null
//       }
//     ],
//     "cost": null,
//     "free_shipping": false,
//     "receiver_address": {
//       "street_number": null
//     }
//   },
//   "tracks": [
//     {}
//   ]
// }'


export type MpCurrencyType= 'BRL'| 'ARS'| 'CLP'| 'MXN'| 'COP'| 'PEN'| 'UYU'

export interface MpItems{
    id:string
    title: string,
    description: string,
    currency_id: MpCurrencyType,
    quantity: number,
    unit_price: number
    picture_url?:string
    category_id?:string
}

//
export interface MpPlayer{
    phone: object,
    identification: object,
    address: object
}

//
export interface MpReferenceResponse{
    collector_id: number,
    items: MpItems[],
    payer: MpPlayer,
    back_urls: object,

    payment_methods: {
      excluded_payment_methods: [
        object
      ],
      excluded_payment_types: [
        object
      ]
    },

    client_id: number,
    marketplace: string,
    marketplace_fee: number,

    shipments: {
      receiver_address: object
    },

    statement_descriptor: string,
    date_created: string,
    id: string,
    init_point: string,
    sandbox_init_point: string,
    metadata: object
}

export interface OutputPreferencFilter{
  id: string,
  init_point: string,
  sandbox_init_point: string,
  date_created: string,
  items: MpItems[]
}

