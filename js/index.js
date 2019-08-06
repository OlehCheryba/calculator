let marks = ['+', '-'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
document.querySelector('#inputExpression').addEventListener("input", () => {
    let input = document.querySelector('#inputExpression').value.split('');
    input = input.filter(el => el === '0' || el === '+' || el === '-' || el === '1' || el === '2' || el === '3' || el === '4');
    let okArr = ['',];
    input.forEach((el, ind) => {
        if (numbers.includes(el)) {
            okArr[okArr.length - 1] += el
        }
        else if (marks.includes(el)) {
            okArr.push(el);
            okArr.push('')
        }
    });
    console.log(okArr);
    document.querySelector('#inputExpression').value = okArr.join('');
    okArr = calculate(okArr);
    if (okArr[0] === '' && okArr.length === 1) document.querySelector('#result').value = 'Result';
    else document.querySelector('#result').value = okArr.join('');
})
function calculate(arr) {
    let num=0;
    for (let i = 0; i < 100; i++) {
        if (numbers.includes(arr[i])) arr[i] = +arr[i];
        if (marks.includes(arr[i])) {
            if (arr[i] == '+') {
                num = Number(arr[i - 1]) + Number(arr[i + 1]);
                arr.splice(i - 1, 3, num)
                i--
            }
         }
    }
    return arr
}