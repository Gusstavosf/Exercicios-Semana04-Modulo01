// Exercicio 3
console.log("main.js funcionando.")

const inputNumero1 = document.getElementById('inputNumero1')
const inputNumero2 = document.getElementById('inputNumero2')
const txtResultado = document.getElementById('txt-resultado')
const operacao = document.getElementById('operacao');

// Exercicio 4
function soma(numero1, numero2) {
    const resultado_soma = numero1 + numero2
    return resultado_soma
}

function subtrai(numero1, numero2) {
    const resultado_subtrai = (numero1 - numero2)
    return resultado_subtrai
}

function multiplica(numero1, numero2) {
    const resultado_multiplica = (numero1 * numero2)
    return resultado_multiplica
}

function divide(numero1, numero2) {
    const resultado_divide = (numero1 / numero2)
    return resultado_divide
}

function calcularResultado(event) {
    event.preventDefault() // bloqueia a ação do form
    console.log('calcularResultado')
    const num1 = parseInt(inputNumero1.value)
    const num2 = parseInt(inputNumero2.value)
    const operacaoSelecionada = operacao.value;
    let resultado;

    switch (operacaoSelecionada) {
        case 'adicao':
            console.log('Adição selecionada');
            resultado = soma(num1, num2);
            break;
        case 'subtracao':
            console.log('Subtração selecionada');
            resultado = subtrai(num1, num2);
            break;
        case 'multiplicacao':
            console.log('Multiplicação selecionada');
            resultado = multiplica(num1, num2);
            break;
        case 'divisao':
            console.log('Divisão selecionada');
            resultado = divide(num1, num2);
            break;
        default:
            console.log('Nenhuma operação selecionada');
 
    }
    
     txtResultado.innerText = `Resultado: ${resultado}`
}