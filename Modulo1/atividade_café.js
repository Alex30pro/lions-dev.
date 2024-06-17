
let gostaDeCafe
let condicao

console.log('Você gosta de café?')

process.stdin.once('data', function(data) {
    gostaDeCafe = data.toString().trim()
    processamento(gostaDeCafe)
    process.exit()

})

function processamento(gostaDeCafe) {

    if (gostaDeCafe == 'sim') {
        condicao = true  
    }
    else {
        condicao = false
    }

    if (condicao == true){
        console.log('que bom, sua vida é muito boa')
    }
    else {
        console.log('que triste, sua vida seria melhor com café')
    }
}