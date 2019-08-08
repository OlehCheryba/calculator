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
document.querySelector('#deleteOne').addEventListener('click', () => {
    input.value = input.value.split('').slice(0, input.value.length - 1);
    calculate();
});
document.querySelector('#toСube').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '^3';
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
document.querySelector('#toExtent').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '^';
    calculate();
});
document.querySelector('#multiply').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '*';
    calculate();
});
document.querySelector('#divide').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '/';
    calculate();
});
document.querySelector('#add').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '+';
    calculate();
});
document.querySelector('#subtract').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '-';
    calculate();
});
document.querySelector('#dot').addEventListener('click', () => {
    if (input.value === '') return;
    input.value += '.';
    calculate();
});
for (let i = 0; i < 10; i++) {
    document.querySelector('#num' + String(i)).addEventListener('click', () => {
        input.value += String(i);
        calculate();
    });
}