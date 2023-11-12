function addDisplay(value) {
    let display = document.getElementById('display');

    if(display.value == 'Impossivel dividir'){
        display.value = '';
        display.value += value;
    }
    else{
        document.getElementById('display').value += value;
    }
        
}