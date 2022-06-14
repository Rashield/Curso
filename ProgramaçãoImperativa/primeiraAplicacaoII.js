let arrayNotas = [
    {idade:15, nota:1},
    {idade:16, nota:2},
    {idade:17, nota:3},
    {idade:18, nota:1},
    {idade:19, nota:2},
    {idade:20, nota:3},
    {idade:21, nota:2},
    {idade:22, nota:1},
    {idade:23, nota:3},
    {idade:24, nota:2},
    {idade:25, nota:1},
    {idade:26, nota:3},
    {idade:27, nota:2},
    {idade:28, nota:1},
    {idade:30, nota:3},
];

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

console.log(mediaIdade(arrayNotas));

//------------------------------------------------------

function totalRegular(array){
    return array.filter(function(x){
        return x.nota==1;
    }).length;
}

console.log(totalRegular(arrayNotas));

//---------------------------------------------------------

function percentBom(array){
    let totalBom = array.filter(function(x){
        return x.nota==2;
    }).length;
    return ("A porcentagem de notas BOM é "+((totalBom*100)/array.length).toFixed(2)+"%.");
}
console.log(percentBom(arrayNotas));