let coresFavoritas = ['preto', 'azul','verde']
let coresEspeciais = []
let corDoUsuario

console.log('Qual sua cor favorita?')

process.stdin.once('data', function(data){
    corDoUsuario = data.toString().trim()
    resposta(corDoUsuario)
    process.exit()
})

function resposta(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)){
        console.log('A sua cor favoria, é uma das favoritas da turma')
    }
    else {
        console.log('A sua cor favorita é diferente, vamos adicionar á lista!')
        coresEspeciais.push(corDoUsuario)
    }
    console.log(`As cores favoritas são ${coresFavoritas}, as cores especiais são ${coresEspeciais}, são ${coresFavoritas.length} elementos usados nos favoritos`)
}