const mongoose = require('mongoose'); //importa a dependencia da biblioteca de Node, onde traduz os dados do banco para objetos JS, JSON.


//Esquemas definem a estrutura dos documentos dentro de uma coleção;
//modelos são usados para criar instâncias de dados que serão armazenados em documentos.
const VendedorSchema = mongoose.model('Vendedor', {
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: String,
    senha: {type: String, required: true}
});
// é colocado os itens para gravar os dados, como nome, email, telefone, qual o tipo dele, no caso uma string e é

module.exports = VendedorSchema;
//Vai exportar um único objeto
