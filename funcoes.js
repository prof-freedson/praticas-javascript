/* var entrada = require('prompt-sync')()

function soma(){
    var a = entrada("Primeiro número: ")
    var b = entrada("Segundo número: ")
    console.log("Soma dos números ", parseInt(a) + parseInt(b))
}

soma() */

//NaN = Not a Number = Não é um número

/* function media(a, b, c, d){
    var soma = a + b + c + d
    var m = soma / 4
    console.log("A média dos números ",a,", ",b,", ",c," e ",d," é ",m)
}
media(9,8,7,6) */

// Cálculo do IMC
//imc = peso / (altura * altura)
/* function imc(peso, altura){
    var imc = peso / (altura * altura)
    return imc
}
function resultadoIMC(imc){
    if(imc < 19){
        console.log("Resultado: ",imc,". O IMC indica magreza")
    }
    else if(imc >= 19 && imc < 24){
        console.log("Resultado: ",imc,". O IMC indica peso normal")
    }
    else if(imc >= 24 && imc < 29){
        console.log("Resultado: ",imc,". O IMC indica acima do peso")
    }
    else{
        console.log("Resultado: ",imc,". O IMC indica obesidade")
    }
} */
// Chamando as funções

// 1) a função "imc"
// precisa de uma variável
//var numIMC = imc(96.5, 1.80)

// 2) a função "resultadoIMC"
// precisará da variável
// 'numIMC' como parâmetro
//resultadoIMC(numIMC)

function sum(a, b){
    if(!Number.isInteger(a) && !Number.isInteger(b)){
        console.log(a + b)
    } else {
        console.log("Um dos números ou só um não é inteiro")
    }
}
sum(3,4)




















// Resultados:
/* imc < 19 (magreza)
imc >= 19 e imc < 24 (peso normal)
imc >= 24 e imc < 29 (acima do peso)
imc >= 29 (obesidade)*/
