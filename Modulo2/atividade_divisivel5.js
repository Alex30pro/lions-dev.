let numero  

console.log('Me diga um número')

process.stdin.once('data', function(data){
    numero = parseFloat(data.toString().trim())
    resposta(numero)
    process.exit()
})

function resposta(numero){
    if(numero % 5 == 0){
        console.log(`Esse valor de ${numero} é divisivel por 5`)
    }
    else{
        console.log(`Esse valor de ${numero} não é divisivel por 5`)
    }
}