/*
1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
    informados	valores	iguais)	e	escrever	o	maior	deles.*/

    function maior(a,b){
        if(a>b){
            console.log(a ,"é maior");
        } else{
            console.log(b ,"é maior");
        }
    }
    maior(5,6);

// 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
//     escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
//     (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

function idade(anoNasc){
    if ((2022-anoNasc)>16){
        console.log("Pode votar!");
    }else{
        console.log("Não pode votar!");
    }
}
idade(2005);

// 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
//     pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
//     seguintes	mensagens:	
//     ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
//     ACESSO	NEGADO	caso	a	senha	seja	inválida.

function validaSenha(senha){
    if(senha===1234){
        console.log("ACESSO PERMITIDO!");
    }else{
        console.log("ACESSO NEGADO!");
    }
}
validaSenha(5454);

// 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
//     dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
//     programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
//     valor	total	da	compra.

function precoMaca(qtde){
    let preco;
    if(qtde>=12){
        preco=qtde*0.25;
    }else{
        preco=qtde*0.30;
    }
    return preco;
}
console.log(precoMaca(5));

// 5. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
//     1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
//     calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
//     Fórmulas:	
//     - para	homens:	(72.7	*	Altura)	– 58	
//     - para	mulheres:	(62.1	*	Altura)	– 44.7

function pesoIdeal(altura, sexo){
    let peso;
    if(sexo==1){
        peso=(62.1*altura)-44.7;
    } else if(sexo==2){
        peso=(72.7*altura)-58;
    } else{
        console.log("Valor inválido");
    }
    return peso;
}
console.log(pesoIdeal(1.75,2));