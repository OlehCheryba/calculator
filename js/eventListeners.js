const input = document.querySelector('#inputEx');
const result = document.querySelector('#result');

document.querySelector("#showKeyboard").addEventListener("click", function () {
    let keyboard = document.querySelector("#keyboard").style;
    if (keyboard.display === "none") keyboard.display = "block";
    else if  (keyboard.display === "block") keyboard.display = "none";
    else keyboard.display = "block";
});
for (let i = 0; i < 10; i++) {
    document.getElementById(String(i)).addEventListener("click", function() {
        input.value += String(i);
        calculate();
    });
}
document.getElementById('+').addEventListener("click", function () {
    input.value += '+';
    calculate();
});
document.getElementById('-').addEventListener("click", function () {
    input.value += '-';
    calculate();
});
document.getElementById('*').addEventListener("click", function () {
    input.value += '*';
    calculate();
});
document.getElementById('/').addEventListener("click", function () {
    input.value += '/';
    calculate();
});
document.getElementById('toSquare').addEventListener("click", function () {
    if (input.value === '') return;
    input.value += '^2';
    calculate();
});
document.getElementById('toSqrt').addEventListener("click", function () {
    if (input.value === '') return;
    input.value += '^0.5';
    calculate();
});
document.getElementById('.').addEventListener("click", function () {
    input.value += '.';
    calculate();
});
document.querySelector('#reset').addEventListener("click", () => {
    input.value = '';
    result.innerHTML = 'Result'
});
document.querySelector('#inputEx').addEventListener("input", calculate);
document.querySelector('#addResult').addEventListener("click", () => {
    if (result.innerHTML.split('').every(el => numbers.includes(el))) {
        input.value = result.innerHTML;
        result.innerHTML = 'Result';
    } else {
        input.value = '';
        result.innerHTML = 'Result'
    }
});