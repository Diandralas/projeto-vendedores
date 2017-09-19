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
    nome: String,
    email: String,
    telefone: String,
    senha: String
});

app.get('/', (request, response) => {
    response.send(dados);
});

app.post('/vendedores', (request, response) => {
    let vendedor = new VendedorSchema(request.body);

    vendedor.save((error, resultado) => {
        response.send(resultado);
    });
});

app.listen(3000, () => {
    console.log('Servidor inicializado');
});
