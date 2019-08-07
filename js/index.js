const marks = ['+', '-', '*', '/', '^'], numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const input = document.querySelector('#inputEx'), result = document.querySelector('#result'), keyboard = document.querySelector('#keyboard').style;

keyboard.display = 'none';
const calculate = () => {
    let exp = [''],  number = 0;
    input.value.split('').filter(el => marks.includes(el) || numbers.includes(el)).forEach((el, ind, arr) => {
        if (el === '.' && !(arr[ind + 1] === '.') && !marks.includes(arr[ind + 1]) && ind !== 0 && !exp[exp.length - 1].includes('.'))
            marks.includes(arr[ind - 1]) ? exp[exp.length - 1] += '0' + el : exp[exp.length - 1] += el;
        else if (numbers.includes(el) && el !== '.') exp[exp.length - 1] += el;
        else if (marks.includes(el) && !marks.includes(arr[ind + 1]) && ind !== 0) {
            exp.push(el);
            exp.push('');
        }
    });
    if (exp[0] === '') {
        input.value = '';
        result.innerHTML = 'Result';
        return;
    }
    input.value = exp.join('');
    try {
        for (let i = 0; ; i++) {
            if (!exp.includes('^')) break;
            if (exp[i + 1] === '') throw new Error();
            if (exp[i] === '^') {
                number = Math.pow(+exp[i - 1], +exp[i + 1]);
                exp.splice(i - 1, 3, number);
                i--;
            }
        }
        for (let i = 0; ; i++) {
            if (!(exp.includes('/') || exp.includes('*'))) break;
            if (exp[i] === '*' || exp[i] === '/')  {
                if (exp[i+1] === '') throw new Error();
                if (exp[i] === '*' ) number = +exp[i - 1] * +exp[i + 1];
                else if (exp[i] === '/') {
                    if (exp[i + 1] === '0') throw new Error();
                    else number = +exp[i - 1] / +exp[i + 1];
                }
                exp.splice(i - 1, 3, number);
                i--;
            }
        }
        for (let i = 0; ; i++) {
            if (!(exp.includes('-') || exp.includes('+'))) break;
            if (exp[i] === '+' || exp[i] === '-') {
                if (exp[i] === '+') number = +exp[i - 1] + +exp[i + 1];
                else if (exp[i] === '-') number = +exp[i - 1] - +exp[i + 1];
                exp.splice(i - 1, 3, number);
                i--;
            }
        }
        if (exp[0] === Infinity) result.innerHTML = 'Too big number';
        else if (exp[0] === -Infinity) result.innerHTML = 'Too small number';
        else result.innerHTML = exp[0];
    } catch(e) { result.innerHTML = 'Can&nbsp;not&nbsp;be&nbsp;calculated'; }
}
