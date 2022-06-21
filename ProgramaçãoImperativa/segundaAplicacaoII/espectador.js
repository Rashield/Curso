function notas(idade,nota){
    this.idade = idade,
    this.nota = nota
};

let conjuntonotas = [];
conjuntonotas.push(new notas(15,1),new notas(16,2),new notas(17,3),new notas(18,1),new notas(19,2),new notas(20,3),new notas(21,2),
new notas(22,1),new notas(23,3),new notas(24,2),new notas(25,1),new notas(26,3),new notas(27,2),new notas(28,1),
new notas(30,3));


module.exports = conjuntonotas;