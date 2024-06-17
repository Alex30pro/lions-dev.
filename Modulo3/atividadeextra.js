// Alex, Wanderlei, Marcos //

let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let senha = ''
let tamanho
let num

console.log('Qual o tamanho da sua senha?')
    
    process.stdin.once('data', function(data){
    tamanho = parseInt(data.toString().trim())
        processamento()
        process.exit()
})

function processamento(){
    for(let i = 0; i < tamanho; i++){
        num = Math.floor(Math.random()* caracteres.length)
        senha += caracteres.charAt(num)
     }
     console.log(senha)
}

