// Alex, Marcos e Wanderlei//

let opcoes = ['Pedra', 'Papel', 'Tesoura'];
let escolhaComputador = Math.floor(Math.random() * opcoes.length) 
let escolhaUsuario
let resultado

console.log("Vamos jogar pedra, papel, tesoura: o que você joga?")

opcoes[escolhaComputador]

process.stdin.once('data', function(data){
    escolhaUsuario = data.toString().trim()
    determinarVencedor(escolhaUsuario, escolhaComputador)
    process.exit()
})

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    // Verifica se é um empate
    if (escolhaUsuario == opcoes[escolhaComputador]) {
      resultado ='Empate';
    } else if (
      // Verifica se o usuário ganhou
      (escolhaUsuario == 'Pedra' && opcoes[escolhaComputador] == 'Tesoura') ||
      (escolhaUsuario == 'Papel' && opcoes[escolhaComputador] == 'Pedra') ||
      (escolhaUsuario == 'Tesoura' && opcoes[escolhaComputador] == 'Papel')){
      resultado = 'Você venceu!';
      }
      
    else {
      // Caso contrário, o usuário perdeu
      resultado ='Você perdeu!';
    }
    console.log(`O usuario jogou ${escolhaUsuario} e a IA jogou ${opcoes[escolhaComputador]}`)
    console.log(resultado)
}


