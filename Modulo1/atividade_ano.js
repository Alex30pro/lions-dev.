
let reposta

console.log('Digite um número')

process.stdin.once('data', function(data) {
    reposta = data.toString().trim()
    processamento(reposta)
    process.exit()
    
})

function processamento(reposta) {
    if (reposta == 0){
        console.log(`esse numero é zero`)
    }
    else if (reposta % 2 == 0){
        console.log(`esse numero é par`)
    }
    else {
        console.log(`o numero é impar`)
    }
    
}