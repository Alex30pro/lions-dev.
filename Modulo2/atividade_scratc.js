let nota1
let nota2  
let media

console.log('Qual sua primeira nota?')

process.stdin.once('data', function(data){
    nota1 = parseFloat(data.toString().trim())

    console.log('Qual sua segunda nota?')
    process.stdin.once('data', function(data){
        nota2 = parseFloat(data.toString().trim())
        resposta(nota1, nota2)
        process.exit()
    })
})

function resposta(nota1, nota2){
    media = (nota1 + nota2)/2
    if (media >= 8) {
        console.log(`Parabéns, você atingiu a nota desejada, sua média é ${media}`)
    }
    else {
        console.log(`Infelizmente você não atingiu a nota desejada, sua média é ${media}`)
    }
}
