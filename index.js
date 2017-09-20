//importando as dependências que serão utilizadas no projeto, inclusive os arquivos
const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const vendedoresController = require('./controllers/vendedores');
const loginController = require('./controllers/login');

//gera a aplicação
const app = express();

//faz a conexão com o banco de dados
mongoose.connect('mongodb://localhost/vendedores');

//middlewares, (função:fazem algo antes de processar o pedido)
app.use(bodyParser.json());
app.use('/vendedores', vendedoresController);
app.use('/login', loginController);

//inicia o servidor, o console.log aparece no terminal, e para acessar ir no navegador localhost:3000
app.listen(3000, () => {
    console.log('Servidor inicializado');
});
