const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost/vendedores');
app.use(bodyParser.json());

let dados = {
    teste: "xpto",
    teste2: "info-legal"
}

const VendedorSchema = mongoose.model('Vendedor', {
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: String,
    senha: {type: String, required: true}
});

app.get('/', (request, response) => {
    response.send(dados);
});

app.get('/vendedores', (request, response) => {
    VendedorSchema.find((error, vendedores) => {
      response.send(vendedores);
    })
});

app.post('/vendedores', (request, response) => {
    let vendedor = new VendedorSchema(request.body);

    vendedor.save((error, resultado) => {
        if(error){
            response.status(400).send(error);
            return;
        }

        response.status(201).send(resultado);
    });
});

app.post('/login', (request, response) => {
    VendedorSchema.findOne(request.body, (error, vendedor) => {
        if(vendedor){
            response.send(vendedor);
            return;
        }

        response.sendStatus(400);
    });
});

app.listen(3000, () => {
    console.log('Servidor inicializado');
});
