let nota1 
let nota2 
let media 

console.log('qual é a primeira nota?')

process.stdin.once('data', function(data){
    nota1 = parseFloat(data.toString().trim())

console.log('qual é a segunda nota?')

process.stdin.once('data', function(data){
    nota2 = parseFloat(data.toString().trim())
    notamedia(nota1, nota2)
    process.exit() 

    })
})

function notamedia(){

media = (nota1+nota2)/2

console.log(`sua média é igual a: ${media}`)
}

