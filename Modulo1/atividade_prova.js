let prova1
let prova2
let notas = []
let media 

console.log('me diga a primeira nota?')

process.stdin.once('data', function(data){
    prova1 = parseFloat(data.toString().trim())
    console.log('me diga a segunda nota?')
    
    process.stdin.once('data', function(data){
        prova2 = parseFloat(data.toString().trim())
        respostamedia(prova1, prova2)
        process.exit()

    })
})

function respostamedia(prova1 , prova2){

    notas.push(prova1)
    notas.push(prova2)

    media = (notas[0]+notas[1])/2

    console.log(`Sua média é ${media}`)
}
    