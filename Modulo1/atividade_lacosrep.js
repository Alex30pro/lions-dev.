let numero
let i

console.log('Digite um numero')

process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    repostanumero()
    process.exit()
})

function repostanumero(){

for ( i=1; i <= 100; i ++ )
    console.log(`${numero} * ${i} = ${numero * i}`)
}    

