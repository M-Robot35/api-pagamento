const x = {
    id: 1322248235,                                       // xxx
    date_created: '2024-04-05T19:59:12.118-04:00',
    date_approved: null,
    date_last_updated: '2024-04-05T19:59:12.118-04:00',
    date_of_expiration: '2024-04-06T19:59:11.715-04:00',
    money_release_date: null,
    money_release_status: 'released',
    operation_type: 'regular_payment',
    issuer_id: '12501',
    payment_method_id: 'pix',
    payment_type_id: 'bank_transfer',
    payment_method: { id: 'pix', type: 'bank_transfer', issuer_id: '12501' },
    status: 'pending',                                    // xxx
    status_detail: 'pending_waiting_transfer',
    currency_id: 'BRL',                                   // xxx
    description: 'tudo pra cancelar',
    live_mode: false,
    sponsor_id: null,
    authorization_code: null,
    money_release_schema: null,
    taxes_amount: 0,
    counter_currency: null,
    brand_id: null,
    shipping_amount: 0,
    build_version: '3.45.2',
    pos_id: null,
    store_id: null,
    integrator_id: null,
    platform_id: null,
    corporation_id: null,
    payer: {
      identification: { number: null, type: null },
      entity_type: null,
      phone: { number: null, extension: null, area_code: null },
      last_name: null,
      id: '1757034729',
      type: null,
      first_name: null,
      email: null
    },
    collector_id: 173380512,
    marketplace_owner: null,
    metadata: {},
    additional_info: {
      available_balance: null,
      nsu_processadora: null,
      authentication_code: null
    },
    order: {},
    external_reference: null,
    transaction_amount: 100,                             // xxx
    transaction_amount_refunded: 0,
    coupon_amount: 0,
    differential_pricing_id: null,
    financing_group: null,
    deduction_schema: null,
    callback_url: null,
    installments: 1,
    transaction_details: {
      payment_method_reference_id: null,
      acquirer_reference: null,
      net_received_amount: 0,
      total_paid_amount: 100,
      overpaid_amount: 0,
      external_resource_url: null,
      installment_amount: 0,
      financial_institution: null,
      payable_deferral_period: null,
      bank_transfer_id: null,
      transaction_id: null
    },
    fee_details: [],
    charges_details: [
      {
        id: '1322248235-001',
        name: 'mercadopago_fee',
        type: 'fee',
        accounts: [Object],
        client_id: 0,
        date_created: '2024-04-05T19:59:12.122-04:00',
        last_updated: '2024-04-05T19:59:12.122-04:00',
        amounts: [Object],
        metadata: {},
        reserve_id: null,
        refund_charges: []
      }
    ],
    captured: true,
    binary_mode: false,
    call_for_authorize_id: null,
    statement_descriptor: null,
    card: {},
    notification_url: null,
    refunds: [],
    processing_mode: 'aggregator',
    merchant_account_id: null,
    merchant_number: null,
    acquirer_reconciliation: [],
    point_of_interaction: {
      type: 'OPENPLATFORM',
      business_info: { unit: 'online_payments', sub_unit: 'sdk', branch: null },
      location: { state_id: null, source: null },
      application_data: { name: null, version: null },
      transaction_data: {
      qr_code: '00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b615204000053039865406100.005802BR5911TE35069Wi056014Begz kGOBJEUte62230519mpqrinter132224823563045D0D',
        bank_transfer_id: null,
        transaction_id: null,
        e2e_id: null,
        financial_institution: null,
         ticket_url: 'https://www.mercadopago.com.br/sandbox/payments/1322248235/ticket?caller_id=1757034729&hash=3d63607d-531e-4f0b-b38f-e299b0ab078b',
        bank_info: [Object],
       qr_code_base64: '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'
      }
    },
    accounts_info: null,
    tags: null,
    api_response: {
      status: 201,
     
    }
}


const payment_id= x.id
const statu= x.status
const currency_id = x.currency_id
const description= x.description
const valor= x.transaction_amount
const url_qrCode= x.point_of_interaction.transaction_data.qr_code
const ticket_payment= x.point_of_interaction.transaction_data.ticket_url
const qr_code_b64= x.point_of_interaction.transaction_data.qr_code_base64


const pix = {

}