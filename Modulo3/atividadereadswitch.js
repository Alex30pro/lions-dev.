const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1
let numeroRodadas = 0
let limiteRodadas = 10

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
console.log(`Olá usuario, vamos brincar?`)

function perguntarContinuacao() {
    rl.question('Digite um Número ', (resposta) => {
        numeroRodadas++
    if (isNaN(resposta) || resposta < 1 || resposta > 100) {
        console.log('Por favor, digite um número válido entre 1 e 100.')
        perguntarContinuacao()
        return;
    }    

    if (numeroRodadas >= limiteRodadas) {
        console.log(`Você atingiu o limite de ${limiteRodadas} rodadas. O número era ${numero}.`);
        rl.close();
        return;
    } 

console.log(`Você digitou: ${resposta}`)

switch (true){
    case resposta < numero :
        console.log('Número errado, vamos continuar!')
        console.log('O número é maior.')
        break;
    case resposta > numero :
        console.log('Número errado, vamos continuar!')
        console.log('O número é menor.')
        break;
    default :
        console.log(`Você usou ${numeroRodadas} rodada(s).`)
        console.log(`Você acertou, parabéns!!!`)
        rl.close();
        return;
}
perguntarContinuacao()
})
}

perguntarContinuacao()
