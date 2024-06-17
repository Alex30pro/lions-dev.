
const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


let filmes = [];


function cadastrarFilme() {

    rl.question("Digite o nome do filme: ", (nome) => {

        rl.question("Digite o nome do diretor: ", (diretor) => {

            rl.question("Digite o ano de lançamento: ", (ano) => {

                rl.question("Digite o gênero do filme: ", (genero) => {

                    filmes.push({ nome: nome, diretor: diretor, ano: ano, genero: genero });

                    console.log("Filme cadastrado com sucesso!");

                    menu();

                });

            });

        });

    });

}

function listarFilmes() {

    if (filmes.length > 0) {

        console.log("Lista de filmes:");

        filmes.forEach(filme => {

            console.log(`Nome: ${filme.nome}, Diretor: ${filme.diretor}, Ano: ${filme.ano}, Gênero: ${filme.genero}`);

        });

    } else {

        console.log("Nenhum filme cadastrado ainda.");

    }

    menu();

}


function editarFilme() {

    rl.question("Digite o nome do filme que deseja editar: ", (nome) => {

        let filmeIndex = filmes.findIndex(filme => filme.nome === nome);

        if (filmeIndex !== -1) {

            rl.question("Digite o novo nome do diretor: ", (diretor) => {

                rl.question("Digite o novo ano de lançamento: ", (ano) => {

                    rl.question("Digite o novo gênero do filme: ", (genero) => {

                        filmes[filmeIndex].diretor = diretor;

                        filmes[filmeIndex].ano = ano;

                        filmes[filmeIndex].genero = genero;

                        console.log("Filme editado com sucesso!");

                        menu();

                    });

                });

            });

        } else {

            console.log("Filme não encontrado.");

            menu();

        }

    });

}


function removerFilme() {

    rl.question("Digite o nome do filme que deseja remover: ", (nome) => {

        //Esta linha procura na lista de filmes (filmes) pelo índice do filme cujo nome corresponde ao nome inserido pelo usuário. Se o filme não for encontrado, filmeIndex será -1.

        let filmeIndex = filmes.findIndex(filme => filme.nome === nome);

       //Este bloco de código é executado se o filme for encontrado na lista. Se filmeIndex não for igual a -1, significa que o filme foi encontrado.

        if (filmeIndex !== -1) {

            filmes.splice(filmeIndex, 1);

            console.log("Filme removido com sucesso!");

        } else {

            console.log("Filme não encontrado.");

        }

        menu();

    });

}


function menu() {

    console.log("\n### Menu ###");

    console.log("1. Cadastrar Filme");

    console.log("2. Listar Filmes");

    console.log("3. Editar Filme");

    console.log("4. Remover Filme");

    console.log("5. Sair");




    rl.question("Digite a opção desejada: ", (opcao) => {

        switch (opcao) {

            case '1':

                cadastrarFilme();

                break;

            case '2':

                listarFilmes();

                break;

            case '3':

                editarFilme();

                break;

            case '4':

                removerFilme();

                break;

            case '5':

                console.log("Saindo do programa...");

                rl.close();

                break;

            default:

                console.log("Opção inválida. Tente novamente.");

                menu();

        }

    });

}




menu();