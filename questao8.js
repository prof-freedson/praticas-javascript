var entrada = require('prompt-sync')()
var n1 = entrada("Informe o primeiro número: ")
var n2 = entrada("Informe o segundo número: ")
if(n1 < n2){
    console.log("Ordem crescente: ", n1, " e ", n2)
    console.log("Ordem decrescente: ", n2, " e ", n1)
}
else if(n1 > n2){
    console.log("Ordem crescente: ", n2, " e ", n1)
    console.log("Ordem decrescente: ", n1, " e ", n2)
}
else{
    console.log("Os números informados são iguais")
}