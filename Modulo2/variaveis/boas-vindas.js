
let nome = ""

console.log("qual o seu nome?")

process.stdin.on('data', function(data) {

 let nome = data.toString();

 console.log('boa tarde' + nome)

 process.exit()

})

