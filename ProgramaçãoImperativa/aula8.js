<<<<<<< HEAD
function podeSubir(altura, vemAcompanhado){
    let podeSubir = false
    if(altura < 2.0 && altura > 1.40){
        podeSubir = true;
        console.log("Acesso autorizado!");
    }
    else if(altura >= 1.20 && altura <= 1.40 && vemAcompanhado){
        podeSubir = true;
        console.log("Acesso autorizado somente com acompanhante!");
    } else{
        podeSubir= false;
        console.log("Acesso negado!");
    }
    return podeSubir;
    }

    podeSubir(1.50,true);
=======
function podeSubir(altura, vemAcompanhado){
    let podeSubir = false
    if(altura < 2.0 && altura > 1.40){
        podeSubir = true;
        console.log("Acesso autorizado!");
    }
    else if(altura >= 1.20 && altura <= 1.40 && vemAcompanhado){
        podeSubir = true;
        console.log("Acesso autorizado somente com acompanhante!");
    } else{
        podeSubir= false;
        console.log("Acesso negado!");
    }
    return podeSubir;
    }

    podeSubir(1.50,true);
>>>>>>> 5baaef7904fbe38f609c4489578f3dea5f12cd19
