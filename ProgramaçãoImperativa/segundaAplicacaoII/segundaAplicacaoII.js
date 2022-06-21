let notafilme = require("./conjuntonotas");

console.log(notafilme);

function mediaIdade(array){
    let otimo = array.filter(function(x){
        return x.nota==3;
    });
    let idades = otimo.map(function(num){
        return num.idade;
    });
    let somaIdades = idades.reduce(function(acumula,x){
        return acumula + x;
    })
    return (somaIdades/idades.length).toFixed(2);
}

console.log("A média da idade das pessoas que responderam ótimo é "+mediaIdade(notafilme)+".");

//------------------------------------------------------

function totalRegular(array){
    return array.filter(function(x){
        return x.nota==1;
    }).length;
}

console.log("A quantidade de pessoas que responderam regular é "+totalRegular(notafilme)+".");

//---------------------------------------------------------

function percentBom(array){
    let totalBom = array.filter(function(x){
        return x.nota==2;
    }).length;
    return ("A porcentagem de notas BOM é "+((totalBom*100)/array.length).toFixed(2)+"%.");
}
console.log(percentBom(notafilme));