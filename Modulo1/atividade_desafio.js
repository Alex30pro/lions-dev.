let somaPares = 0
let somaImpares = 0
let totalPares = 0
let totalImpares = 0 
let mediaPares = 0
let mediaImpares = 0

for (let i = 1 ; i <=999 ; i++){
    
    if(i%2==0){
        totalPares++    
        somaPares += i
    }
    else{
        totalImpares++
        somaImpares += i
    }
}

mediaPares = somaPares/totalPares
mediaImpares = somaImpares/totalImpares

console.log('|-------------------------------|')
console.log(`|o número total de pares é ${totalPares}  |`)
console.log(`|o número total de ímpares é ${totalImpares}|`)
console.log(`|a soma total de pares é ${somaPares} |`)
console.log(`|a soma total de pares é ${somaImpares} |`)
console.log(`|a média total de pares é ${mediaPares}   |`)
console.log(`|a média total de ímpares é ${mediaImpares} |`)
console.log('|-------------------------------|')

if (somaPares>somaImpares){
    console.log('Tem mais números pares do que ímpares')
}
else{
    console.log('Tem mais números ímpares do que pares')
}