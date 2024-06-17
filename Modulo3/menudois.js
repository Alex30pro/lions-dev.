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

exibirMenu()


// Define uma função chamada exibirMenu() que exibe um menu de opções para o usuário.//

function exibirMenu() {

    console.log(`

    Menu:

    1. Cadastrar funcionário

    2. Listar todos os funcionarios

    3. Exibir funcionario com maior salario

    4. Editar

    5. Remover algum funcionário

    6. Sair

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

                editar()           

                break

            case '5':

                remover()

                break

            case '6':

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


// Define a função cadastrarFuncionario() que permite ao usuário cadastrar um novo funcionário.//

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


// Define a função listarFuncionarios() que lista todos os funcionários cadastrados.//

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


// Define a função exibirMaiorSalario() que exibe o funcionário com o maior salário.//

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


    if (maioresSalarios.length === 1) {

        console.log("Funcionário com o maior salário:");

        console.log(maioresSalarios[0]);

    } else {

        console.log("Funcionários com o maior salário:");

        maioresSalarios.forEach(funcionario => {

            console.log(funcionario);

        });

    }

    exibirMenu()

}


// Define a função editar() que permite ao usuário editar um funcionário existente.//

function editar() {
   
    rl.question('Digite o número do funcionário que deseja editar: ', (numero) => {

        if (numero > 0 && numero <= funcionarios.length) {

            rl.question('Digite o novo nome do funcionário: ', (novoNome) => {

                rl.question('Digite o novo cargo do funcionário: ', (novoCargo) => {

                    rl.question('Digite o novo salário do funcionário: ', (novoSalario) => {

                        funcionarios[numero - 1] = {

                            nome: novoNome,

                            cargo: novoCargo,

                            salario: parseFloat(novoSalario)

                        }

                        console.log('Funcionário editado com sucesso!');

                        exibirMenu();

                    });

                });

            });

        } else {

            console.log('Número inválido, tente novamente.');

            exibirMenu();

        }

    });

}

// Define a função remover() que permite ao usuário remover um funcionário existente.//

function remover() {

    rl.question('Digite o número do funcionário que deseja remover: ', (numero) => {

        if (numero > 0 && numero <= funcionarios.length) {

            funcionarios.splice(numero - 1, 1);

            console.log('Funcionário removido com sucesso!');

            exibirMenu();

        } else {

            console.log('Número inválido, tente novamente.');

            exibirMenu();

        }

    });

}