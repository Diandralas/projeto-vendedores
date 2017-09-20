const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const vendedoresController = require('./controllers/vendedores');
const loginController = require('./controllers/login');

const app = express();

mongoose.connect('mongodb://localhost/vendedores');

app.use(bodyParser.json());
app.use('/vendedores', vendedoresController);
app.use('/login', loginController);

app.listen(3000, () => {
    console.log('Servidor inicializado');
});
