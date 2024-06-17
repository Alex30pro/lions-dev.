let valor1 = 5
let valor2 = 3
let operador

console.log(calculadora(valor1,valor2,'+'))
console.log(calculadora(valor1,valor2,'-'))
console.log(calculadora(valor1,valor2,'/'))
console.log(calculadora(valor1,valor2,'*'))

    function calculadora(valor1,valor2,operador){
        if (operador == '+'){
            return valor1+valor2
        }
        else if(operador == '-'){
            return valor1-valor2
        }
        else if(operador == '/'){
            return valor1/valor2
        }
        else if(operador == '*'){
            return valor1*valor2
        }  
        else {
            console.log('O operador que você digitou é invalido.')
        }  
    
    }