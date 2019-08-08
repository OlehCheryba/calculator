const addSymbol = str => {
    if (input.value === '') return;
    input.value += str;
    calculate();
}
input.addEventListener('input', calculate);
document.querySelector('#reset').addEventListener('click', () => {
    input.value = '';
    result.innerHTML = 'Result';
});
document.querySelector('#addResult').addEventListener('click', () => {
    if (result.innerHTML.split('').every(el => numbers.includes(el))) {
        input.value = result.innerHTML;
        result.innerHTML = 'Result';
    } else {
        input.value = '';
        result.innerHTML = 'Result';
    }
});
document.querySelector('#showKeyboard').addEventListener('click', () => {
    document.querySelector('#showKeyboard').innerHTML = keyboard.display === 'block' ? 'Show keyboard ▼' : 'Hide keyboard ▲';
    keyboard.display = keyboard.display === 'block' ? 'none' : 'block';
});
document.querySelector('#toСube').addEventListener('click', () => addSymbol('^3'));
document.querySelector('#toSquare').addEventListener('click', () => addSymbol('^2'));
document.querySelector('#toSqrt').addEventListener('click', () => addSymbol('^0.5'));
document.querySelector('#toExtent').addEventListener('click', () => addSymbol('^'));
document.querySelector('#multiply').addEventListener('click', () => addSymbol('*'));
document.querySelector('#divide').addEventListener('click', () => addSymbol('/'));
document.querySelector('#add').addEventListener('click', () => addSymbol('+'));
document.querySelector('#subtract').addEventListener('click', () => addSymbol('-'));
document.querySelector('#dot').addEventListener('click', () => addSymbol('.'));
document.querySelector('#deleteOne').addEventListener('click', () => {
    input.value = input.value.split('').slice(0, input.value.length - 1);
    calculate();
});
for (let i = 0; i < 10; i++) {
    document.querySelector('#num' + i).addEventListener('click', () => {
        input.value += i;
        calculate();
    });
}
