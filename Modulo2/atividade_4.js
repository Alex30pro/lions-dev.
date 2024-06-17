let notas = [3, 4, 5, 6, 7, 7.7, 8, 9, 9.3, 9.9]
let notaMedia = 0
let notaAlta = notas[0]
let notaBaixa = notas[0]
let somaNotas = 0

// nota mais alta e a nota mais baixa //
for(let i = 0; i<notas.length; i++){
    if(notas[i] > notaAlta){
        notaAlta = notas[i]
    }
    if(notas[i] < notaBaixa){
        notaBaixa = notas[i]
    }
}    

notas.push(8.1)

// calcular média //
for(i = 0; i<notas.length; i++){
   somaNotas = somaNotas+notas[i]
   notaMedia = somaNotas/notas.length
}
// notas aprovadas e notas reprovadas //
for (i = 0; i<notas.length; i++){
    if(notas[i]>=notaMedia){
        console.log(`Você foi aprovado com a nota ${notas[i]}`)
    }
    else{
        console.log(`Você reprovou com a nota ${notas[i]}`)
    }
}
console.log(`A média da sala é ${notaMedia}.`)
console.log(`Sua nota mais alta é ${notaAlta}, e sua nota mais baixa é ${notaBaixa}.`)
console.log(`As notas da sala são ${notas}.`)
