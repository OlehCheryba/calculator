document.querySelector('#showKeyboard').addEventListener('click', () => {
    if (keyboard.display === 'none') {
        document.querySelector('#showKeyboard').innerHTML = 'Hide keyboard';
        keyboard.display = 'block';
    }
    else if  (keyboard.display === 'block') {
        document.querySelector('#showKeyboard').innerHTML = 'Show keyboard';
        keyboard.display = 'none';
    }
});
for (let i = 0; i < 10; i++) {
    document.querySelector('#num' + String(i)).addEventListener('click', () => {
        input.value += String(i);
        calculate();
    });
}
document.querySelector('#add').addEventListener('click', () => {
    input.value += '+';
    calculate();
});
document.querySelector('#subtract').addEventListener('click', () => {
    input.value += '-';
    calculate();
});
document.querySelector('#multiply').addEventListener('click', () => {
    input.value += '*';
    calculate();
});
document.querySelector('#divide').addEventListener('click', () => {
    input.value += '/';
    calculate();
});
document.querySelector('#toSquare').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '^2';
    calculate();
});
document.querySelector('#toSqrt').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '^0.5';
    calculate();
});
document.querySelector('#dot').addEventListener('click', () => {
    input.value += '.';
    calculate();
});
document.querySelector('#reset').addEventListener('click', () => {
    input.value = '';
    result.innerHTML = 'Result';
});
document.querySelector('#deleteOne').addEventListener('click', () => {
    input.value = input.value.split('').slice(0, input.value.length - 1);
    calculate();
});
input.addEventListener('input', calculate);
document.querySelector('#addResult').addEventListener('click', () => {
    if (result.innerHTML.split('').every(el => numbers.includes(el))) {
        input.value = result.innerHTML;
        result.innerHTML = 'Result';
    } else {
        input.value = '';
        result.innerHTML = 'Result';
    }
});