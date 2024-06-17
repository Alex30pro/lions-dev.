let nota

console.log("Me diga qual foi sua nota?")

process.stdin.once('data', function(data){
    nota = parseInt(data.toString().trim())
    notamedia(nota)
    if(nota>=70){
        console.log(`Você foi aprovado com a nota ${notamedia(nota)}`)
    }
    else{
        console.log(`Você reprovou com a nota ${notamedia(nota)}`)
    }
    process.exit() 
})

function notamedia(nota){
    switch (true){
        case (nota>=90 && nota<=100): 
        return 'A'

        case (nota>=80 && nota<=89):
        return 'B'
        
        case (nota>=70 && nota<=79):
        return 'C'

        case (nota>=60 && nota<=69):
        return 'D'

        case (nota>=0 && nota<=59):
        return 'F'   
    }
}

  
