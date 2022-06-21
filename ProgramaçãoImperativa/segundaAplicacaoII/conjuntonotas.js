let espectador = require("./espectador");

function Filme (nome, idade, nota){
    this.nome = nome
    this.idade = idade,
    this.nota = nota
};

let filmes = [];
for(let x=0;x<espectador.length;x++){
    filmes.push(new Filme("Homem aranha",espectador[x].idade,espectador[x].nota));
}
module.exports = filmes;