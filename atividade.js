class Funcionario {
    nome;
    idade;
    cargo;

    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Eu sou o ${this.nome}, tenho ${this.idade} anos e sou um ${this.cargo}.`);
    }

    trabalhar() {
        console.log("Estou trabalhando nesta empresa...");
    }
}

class Gerente extends Funcionario {
    departamento;

    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo)
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(`E estou gerenciando o departamento de ${this.departamento}!`);
    }
}

class Programador extends Funcionario {
    linguagem;

    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`E estou programando em ${this.linguagem}!`);
    }
}

let gerente1 = new Gerente("Vegetti", 35, "gerente", "vendas");
let programdor1 = new Programador("Payet", 37, "programador", "javascript")

gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

programdor1.seApresentar();
programdor1.trabalhar();
programdor1.programar();