// Esse código é um programa simples em JavaScript que interage com o usuário através do terminal. Ele permite cadastrar funcionários, listar todos os funcionários cadastrados e exibir o(s) funcionário(s) com o maior salário. //

// Importa o módulo readline do Node.js, que fornece uma interface para ler dados de uma stream de entrada.//
const readline = require('readline')

// Cria uma interface readline, configurando-a para ler a partir do stdin (entrada padrão) e escrever para o stdout (saída padrão).//
const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

})

// Inicializa um array funcionarios com alguns objetos representando funcionários, cada um com nome, cargo e salário.//
let funcionarios = [

    { nome: "João", cargo: "Analista", salario: 3500 },

    { nome: "Maria", cargo: "Gerente", salario: 5500 },

    { nome: "Pedro", cargo: "Programador", salario: 4200 }

]

// Chama a função exibirMenu() para exibir o menu inicial.//
exibirMenu()

// Define uma função chamada exibirMenu() que exibe um menu de opções para o usuário.//
function exibirMenu() {

    console.log(`

    Menu:

    1. Cadastrar funcionário

    2. Listar todos os funcionarios

    3. Exibir funcionario com maior salario

    4. Sair

    `)


// Solicita ao usuário que escolha uma opção e executa uma função de retorno de chamada quando uma resposta for recebida.//
    rl.question('Escolha uma opção: ', (opcao) => {

        switch (opcao) {

            case '1':

                cadastrarFuncionario()

                break

            case '2':

                listarFuncionarios()

                break

            case '3':

                exibirMaiorSalario()

                break

            case '4':

                console.log('Sair')

                rl.close()

                break

            default:

                console.log('Opção inválida, tente novamente.')

                exibirMenu()

                break

        }

    })

}

// As funções cadastrarFuncionario(), listarFuncionarios() e exibirMaiorSalario() são chamadas dependendo da escolha do usuário.//
function cadastrarFuncionario() {

    rl.question('Digite o nome do funcionário: ', (nome) => {

        rl.question('Digite o cargo do funcionário: ', (cargo) => {

            rl.question('Digite o salário do funcionário: ', (salario) => {

                funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })

                console.log('Funcionário cadastrado com sucesso!')

                exibirMenu()

            })

        })

    })

}

function listarFuncionarios() {

    if (funcionarios.length === 0) {

        console.log('Nenhum funcionario cadastrado')

    } else {

        console.log('Lista de funcionários cadastrados:')

        funcionarios.forEach(funcionario => {

            console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)

        })

    }

    exibirMenu()

}

function exibirMaiorSalario() {
    if (funcionarios.length === 0) {
        console.log('Nenhum funcionário cadastrado');
        exibirMenu();
        return;
    }

    let maioresSalarios = [];
    let maiorSalario = 0;

    // Encontrando o maior salário
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > maiorSalario) {
            maiorSalario = funcionarios[i].salario;
        }
    }

    // Encontrando funcionários com o maior salário
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario === maiorSalario) {
            maioresSalarios.push(funcionarios[i]);
        }
    }
//Verifica se há apenas um funcionário com o maior salário ou se há mais de um. Se houver apenas um, exibe uma mensagem indicando que é o funcionário com o maior salário e imprime suas informações. Caso contrário, exibe uma mensagem indicando que são funcionários com o maior salário e itera sobre o array maioresSalarios para imprimir as informações de cada um deles.
    if (maioresSalarios.length === 1) {
        console.log("Funcionário com o maior salário:");
        console.log(maioresSalarios[0]);
    } else {
        console.log("Funcionários com o maior salário:");
        maioresSalarios.forEach(funcionario => {
            console.log(funcionario);
        });
    }

    exibirMenu();
}