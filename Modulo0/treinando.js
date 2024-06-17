let valorInicial;
let temperaturaInicial;
let temperaturaFinal;
let Celsius = 0;
let Kelvin = 0;
let Fahrenheit = 0;

console.log("Por favor, insira a temperatura atual da sua cidade (apenas o número):");

process.stdin.once('data', function(data) {
    valorInicial = parseFloat(data.toString().trim());

    console.log("Agora, por favor, insira a unidade de temperatura utilizada (Celsius, Fahrenheit, Kelvin):");

    process.stdin.once('data', function(data) {
        temperaturaInicial = data.toString().trim().toLowerCase(); // Convertendo para minúsculas para padronização

        if (["celsius", "fahrenheit", "kelvin"].includes(temperaturaInicial)) {
            processamento();
        } else {
            console.log("Unidade de temperatura inválida. Por favor, insira Celsius, Fahrenheit ou Kelvin.");
            process.exit();
        }
    });
});

function processamento() {
    switch (temperaturaInicial) {
        case 'celsius':
            Celsius = valorInicial;
            Kelvin = Celsius + 273.15;
            Fahrenheit = 9/5 * Celsius + 32;
            break;

        case 'fahrenheit':
            Fahrenheit = valorInicial;
            Celsius = 5/9 * (Fahrenheit - 32);
            Kelvin = 5/9 * (Fahrenheit - 32) + 273.15;
            break;

        case 'kelvin':
            Kelvin = valorInicial;
            Celsius = Kelvin - 273.15;
            Fahrenheit = 9/5 * (Kelvin - 273.15) + 32;
            break;
    }

    console.log(`${Celsius} Celsius.`);
    console.log(`${Kelvin} Kelvin.`);
    console.log(`${Fahrenheit} Fahrenheit.`);
}

