let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0;
let notaMaxima = notas[0];
let notaMinima = notas[0];
let acimaMedia = 0
let notasReprovadas = 0
let novaNota = 8.0
let media 

for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}
media = soma / notas.length;
console.log(`A média das notas é ${media}.`)

for(let i = 0; i < notas.length; i++){
    if(notas[i]>notaMaxima){
        notaMaxima = notas[i];
    }
    if(notas[i]<notaMinima){
        notaMinima = notas[i];
    }
}
console.log(`A maior nota é ${notaMaxima} e a menor nota é ${notaMinima}.`)

notas.push(novaNota)
console.log(`A lista atualizada das notas são ${notas}.`)

for(let i = 0; i < notas.length; i++){
    if(notas[i] > 7.7){
        acimaMedia++;
    }
}
console.log(`As notas acima da média são ${acimaMedia}.`)

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 7.7){
        notasReprovadas++;
    }
}
console.log(`As notas reprovadas são ${notasReprovadas}.`)

