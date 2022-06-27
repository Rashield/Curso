//não entendi muito bem o desafio 7, porém acredito que seja isso, passei a lista de estudantes para
//curso.js

let estudante = require("../Desafio/aluno");

let listaEstudantes = [];
listaEstudantes.push(new estudante("Darlei",1,[8,9,10]),new estudante("José",5,[6,6,6]),
new estudante("Renatinho",8,[8,9,10]),new estudante("Darlei",5,[5,1,2]));

module.exports = listaEstudantes;