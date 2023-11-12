function calcularResultado() {
    let displayValue = document.getElementById('display').value;
    let resultado;

    try {
        resultado = eval(displayValue);
        if(resultado == 'Infinity')
        resultado = 'Impossivel dividir por ZERO';

    } catch (error) {
        resultado = 'Erro';
    }

    document.getElementById('display').value = resultado;
}

function limpaDisplay() {
    document.getElementById('display').value = '';
}