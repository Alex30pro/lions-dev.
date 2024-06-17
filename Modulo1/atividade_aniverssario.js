const ano = 2024
let nome 
let idade
let aniverssario
let anodenascimento

console.log('Como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é a sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data,toString().trim())
        console.log('Você já fez aniverssario esse ano?')
   
        process.stdin.once('data', function(data) {
            aniverssario = data.toString().trim() 
            processamento(nome, idade, aniverssario)   
            process.exit() 
        })

    })
})

function processamento(nome ,idade, aniverssario) {
    anodenascimento = ano - idade

    if (aniverssario == 'sim') {
        console.log(`${nome}, você nasceu em ${anodenascimento}`)
    }
    else {
        console.log(`${nome} você nasceu em ${anodenascimento -1}`)
    }
}