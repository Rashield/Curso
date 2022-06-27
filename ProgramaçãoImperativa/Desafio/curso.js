
let estudante = require("../Desafio/aluno");
let listaEstudantes = require("../Desafio/estudantes");

let Curso = {
    estudantes:listaEstudantes,//defini como listaEstudantes para o desafio 7, antes estava como um array []
    nomecurso:"teste",
    notaAprovacao:6,
    faltasMax:5,
    addAluno : function(nome,faltas,notas){
        this.estudantes.push(new estudante(nome,faltas,notas));
    },
    verificaAprovacao : function(aluno){
       if(aluno.calculaMedia()<this.notaAprovacao || aluno.qtdfaltas>this.faltasMax){
            return false;
       }else if(aluno.qtdfaltas===this.faltasMax){
            let nota = ((this.notaAprovacao*10)/100)+this.notaAprovacao; 
            if(aluno.calculaMedia()<nota){
                return false;
            }else{
                return true;
            }
       }else{
        return true;
       }
    },
    verificaTurma: function(){
        let aprovacoes = [];
        for(let x=0;x<this.estudantes.length;x++){
             aprovacoes.push(this.estudantes[x].nome);
             if(this.verificaAprovacao(this.estudantes[x])== true){
                aprovacoes.push("Aprovado");
             }else
             aprovacoes.push("Reprovado");
        }
        return aprovacoes;
    }
};

module.exports = Curso;