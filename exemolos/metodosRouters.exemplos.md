

const BASE_URL= 'http://localhost'


# [ POST ] Pagamento PIX  
    - BASE_URL/paymentpix
    { 
        "transaction_amount": 20,
        "description": "thiagol apenas teste",
        "email": "thiagoteles@gmail.com"
    }


# [ POST ] CREATE USER
    - BASE_URL/create
    {
        "name": "carrinho",
        "email": "Carrinho de testes",
        "password":"quanta lameira pablito"
    }
    

# [ POST ] LOGIN
    - BASE_URL/login
    {
        "email":"thiagoteles33@gmail.com",
        "password":"quantalameira"
    }


# [ POST ] CRIAR JOBS  
    - BASE_URL/jobs
    {
        "name": "carrinho",
        "time": "HH:mm",
        "mensagem":"quanta lameira pablito"
    }