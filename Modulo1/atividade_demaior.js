let nome 
let idade

console.log('Olá, qual o seu nome?')

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log(`${nome} Qual sua idade?`)

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
        
    })
})

function processamento(nome, idade) {

    var anosQueFaltam = 18-idade

    if (idade>=18){
        console.log('Você já é de maior de idade!')
    }
    else if (idade=18) {
        console.log(`${nome} Você se tornará maior de idade, em um ano!`)
    }
    else {
        console.log(`Você é menor de idade! Faltam ${anosQueFaltam} anos!`)
    }
}