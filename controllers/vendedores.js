const express = require('express');
const VendedorSchema = require('../schemas/vendedor');
let router = express.Router()
//faz parte do express v4, criar rotas torna aplicações mais flexiveis, com instancias.

router.get('/', (request, response) => { //recebe uma chamada simples para procurar os dados dos vendedores que constam no banco
    VendedorSchema.find((error, vendedores) => {
      response.send(vendedores); //responde um objeto
    })
});

router.get('/um/:id', (request, response) => {
    VendedorSchema.findById(request.params.id, (error, vendedor) => { //findById procura o documento pelo seu ID
        if(vendedor){
            response.send(vendedor);
            return //retorna o que foi solicitado da função e para de rodar esta função.
        }

        response.sendStatus(404); //envia para o postman por ex, é o retorno.
    })
});

router.get('/:nome', (request, response) => { // recebe uma chamada de retornar um dado variavel, de dentro do banco
    const regex = new RegExp(request.params.nome, 'i'); //regex funciona como uma pesquisa de determinada combinação de termos em um string
//RegExp funciona como um construtor de um objeto.
    VendedorSchema.find({nome: regex}, (error, vendedor) => {
        if(vendedor){
            response.send(vendedor);
            return;
        }

        response.sendStatus(404);
    })
});

router.post('/', (request, response) => { //recebe uma chamada no post para "criar"
    let vendedor = new VendedorSchema(request.body); //cria uma variavel que vai receber um pacotinho de dados do novo vendedor

    vendedor.save((error, resultado) => { //recebe uma chamada para salvar, se der erro retorna 400 (requisição errada, erro do cliente)
        if(error){
            response.status(400).send(error);
            return;
        }

        response.status(201).send(resultado); //se estiver ok, o dado é salvo no banco do mongo e retorna o status 201 (created)
    });
});

module.exports = router;
// Uma instância de Router é um middleware e sistema de roteamento, funciona como um mini app
