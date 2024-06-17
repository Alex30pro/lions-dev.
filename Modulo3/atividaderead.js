// Alex, Wanderlei //

const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function perguntarContinuacao() {
rl.question('Digite um Número ', (resposta) => {
console.log(`Você digitou: ${resposta}`)

if (resposta != numero) {
console.log('Número errado, vamos continuar!')
    if(resposta > numero){
        console.log('O numero é menor')
    }else{
        console.log('O numero é maior')
    }
perguntarContinuacao()
} else {
console.log('Voce Acertou. Programa encerrado.')
rl.close()
}
})
}

perguntarContinuacao()