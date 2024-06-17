const ano = 2024
let nome 
let idade

console.log('Como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é a sua idade?')

    process.stdin.once('data', function(data) {
    idade = parseInt(data,toString().trim())
    processamento(nome, idade)
    process.exit()


    })
})

function processamento(nome ,idade) {
    anodenascimento = ano - idade
    console.log(`olá ${nome}, se você já fez aniverssário esse ano, você nasceu em ${anodenascimento} Se ainda não fez aniverssário esse ano, você nasceu em ${anodenascimento -1}`)
}