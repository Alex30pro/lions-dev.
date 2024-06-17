let valor1 = 6
let valor2 = 8
let operador

console.log(calculadora(valor1,valor2,'+'))
console.log(calculadora(valor1,valor2,'-'))
console.log(calculadora(valor1,valor2,'/'))
console.log(calculadora(valor1,valor2,'*'))

function calculadora(valor1,valor2,operador){
    switch (operador){
        case '+':
            return valor1 + valor2

        case '-':
            return valor1 - valor2

        case '/':
            return valor1 / valor2

        case '*':
            return valor1 * valor2
            
        default :
            return 'O operador que você digitou é invalido.'    
    }
}