// Programação orientada a objetos
// Linguagem JavaScript

// 1) criar a classe

class Impressora{
    // 2) Definir os atributos
    // É necessário usar o método constructor(){}
    constructor(marca, modelo, tipo, conectividade){
        this.marca = marca
        this.modelo = modelo
        this.tipo = tipo
        this.conectividade = conectividade
    }

    // 3) criar um método
    // Exemplo: método mostrar
    // OBSERVAÇÃO: usar a crase(``)
    mostrar(){
        console.log(`Impressora da marca ${this.marca}, modelo ${this.modelo}, `+
        `impressão do tipo ${this.tipo} e conectividade via ${this.conectividade}`)
    }
}

// 4) criar o objeto
// OBSERVAÇÃO: é criado fora da classe
// press01 é o nome do objeto escolhido
let press01 = new Impressora('Xerox', 'XEROX123', 'laser', 'cabo USB')

// 5) chamando o método mostrar()
press01.mostrar()