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


//Agora, seu objetivo é aprimorar o código, adicionando tratamento de exceções (usando try-catch) e interação com elementos do DOM. Você precisa obter os valores preenchidos em um formulário HTML, que possui campos para nome, idade, cargo, departamento e linguagem de programação. Certifique-se de que todos os campos estão preenchidos corretamente antes de criar as instâncias das classes.

//Após obter os valores dos campos do formulário, crie instâncias de um gerente e de um desenvolvedor, utilizando os valores preenchidos. Em seguida, chame os métodos apropriados para cada um dos funcionários e exiba as informações relevantes na página, como a apresentação do funcionário e as tarefas que ele realiza.

//Caso ocorra algum erro durante a execução do código, trate as exceções usando a função exibirErro(), que exibirá uma mensagem de erro na página.

//Lembre-se de testar o código, preencher todos os campos corretamente e também de testar situações em que os campos não estejam preenchidos ou contenham valores inválidos.

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "idade": e.target.elements["idade"].value,
        "cargo": e.target.elements["cargo"].value,
        "departamento": e.target.elements["departamento"].value,
        "linguagem": e.target.elements["linguagem"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = "index.html";
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})