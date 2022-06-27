

let Aluno = function(nome,qtdfaltas,notas){
    this.nome = nome,
    this.qtdfaltas = qtdfaltas,
    this.notas = notas,
    this.calculaMedia = function(){
        let total=0;
        for(let x=0;x<this.notas.length;x++){
            total += this.notas[x];
        }
        return total/this.notas.length;
    };
    this.aumentaFalta = function(){
        this.qtdfaltas++;
    };
};
 
module.exports = Aluno;