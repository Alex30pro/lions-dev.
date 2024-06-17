// Alex e Marcos //

let numeroDeLados

console.log("qual é o número de lados do dado?")

process.stdin.once('data', function(data){
    numeroDeLados = parseInt(data.toString().trim())

    let valorDoDado = Math.floor(Math.random()* numeroDeLados) + 1

    console.log(`O dado caiu em ${valorDoDado}`)

    process.exit()
})  


