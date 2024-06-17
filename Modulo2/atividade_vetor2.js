let numeros = [27, 10, 3, 0, 20, 5, 6, 3]
let numerosImpares = []
let numerosPares = []
let idade = [30]

numeros.push(idade)

for(let i = 0; i<numeros.length; i++){
    if(numeros[i] % 2 == 1){
        numerosImpares.push(numeros[i])
    }
    else{
        numerosPares.push(numeros[i])
    }
}
console.log(`Os números ímpares são ${numerosImpares}, e os números pares são ${numerosPares}.`)