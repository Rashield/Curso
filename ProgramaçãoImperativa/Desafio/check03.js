let curso = require("../Desafio/curso");

//deixei alguns exemplos aqui para mostrar o addAluno funcionando
curso.addAluno("Felipe",1,[8,9,10]);
curso.addAluno("Maria",5,[6,6,6]);
curso.addAluno("Renata",8,[8,9,10]);
curso.addAluno("Auri",5,[5,1,2]);

// console.log(curso.verificaAprovacao(curso.estudantes[0]));
// console.log(curso.verificaAprovacao(curso.estudantes[1]));
// console.log(curso.verificaAprovacao(curso.estudantes[2]));
// console.log(curso.verificaAprovacao(curso.estudantes[3]));

console.log(curso.verificaTurma());
