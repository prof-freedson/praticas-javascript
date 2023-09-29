const notas = [7, 8.5, 9, 10, 6]
const alunos = ["A", "B", "C", "D", "E"]

//console.log("Posição 3 do vetor notas: ", notas[3]) // Imprime a nota de posição(índice) 3

/* for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
} */

// Outra maneira: usando um 'apelido'
/* for(let nota of notas){
    console.log(nota)
} */

//notas.forEach(nota => console.log(nota * 2))

/* for(let i = 0; i < notas.length; i++) {
    console.log("Aluno " + alunos[i] + " tirou " + notas[i])
    for (let j = 0; j < alunos.length; j++){
        if(i == j){
            console.log("Aluno " + alunos[i] + " tirou " + notas[j])
        }
    }
} */

var nomes = ["João", "Maria", "Ana", "Pedro"]
var idades = [18, 20, 22, 19]
for(i = 0; i <= 3; i++){
    console.log("Meu nome é " + nomes[i] + " e tenho " + idades[i] + " anos")
}

