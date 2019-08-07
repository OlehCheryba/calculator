const marks = ['+', '-', '*', '/', '^'], numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const input = document.querySelector('#inputEx'), result = document.querySelector('#result'), keyboard = document.querySelector('#keyboard').style;

keyboard.display = 'none';
function calculate() {
    let inputEx = input.value.split(''), okArr = ['',],  number = 0;
    inputEx = inputEx.filter(el => marks.includes(el) || numbers.includes(el));
    inputEx.forEach((el, ind) => {
        if (el === '.' && !(inputEx[ind + 1] == '.') && !marks.includes(inputEx[ind + 1]) && ind !== 0 && !okArr[okArr.length - 1].includes('.'))
            marks.includes(inputEx[ind - 1]) ? okArr[okArr.length - 1] += '0' + el : okArr[okArr.length - 1] += el;
        else if (numbers.includes(el) && el !== '.')
            okArr[okArr.length - 1] += el
        else if (marks.includes(el)) {
            if (!marks.includes(inputEx[ind + 1]) && ind != 0) {
                okArr.push(el);
                okArr.push('');
            }
        }
    });
    if (okArr[0] === '') {
        input.value = '';
        result.innerHTML = 'Result';
        return;
    }
    input.value = okArr.join('');
    try {
        for (let i = 0; ; i++) {
            if (!okArr.includes('^')) break;
            if (okArr[i] == '^') {
                if (okArr[i+1] === '') {
                    throw new Error();
                }
                number = Math.pow(Number(okArr[i - 1]), Number(okArr[i + 1]));
                okArr.splice(i - 1, 3, number);
                i--;
            }
        }
        for (let i = 0; ; i++) {
            if (!(okArr.includes('/') || okArr.includes('*'))) break;
            if (okArr[i] == '*' || okArr[i] == '/')  {
                if (okArr[i] == '*') {
                    if (okArr[i+1] === '') {
                        throw new Error();
                    }
                    number = Number(okArr[i - 1]) * Number(okArr[i + 1]);
                }
                else if (okArr[i] == '/') {
                    if (okArr[i+1] === '' || okArr[i+1] === '0') {
                        throw new Error();
                    }
                    number = Number(okArr[i - 1]) / Number(okArr[i + 1]);
                }
                okArr.splice(i - 1, 3, number)
                i--
            }
        }
        for (let i = 0; ; i++) {
            if (!(okArr.includes('-') || okArr.includes('+'))) break;
            if (numbers.includes(okArr[i])) okArr[i] = +okArr[i];
            if (okArr[i] == '+' || okArr[i] == '-') {
                if (okArr[i] == '+') num = Number(okArr[i - 1]) + Number(okArr[i + 1]);

                else if (okArr[i] == '-') num = Number(okArr[i - 1]) - Number(okArr[i + 1]);

                okArr.splice(i - 1, 3, num)
                i--
            }
        }
        if (okArr[0] === Infinity) result.innerHTML = 'Too big number';
        else if (okArr[0] === -Infinity) result.innerHTML = 'Too small number';
        else result.innerHTML = okArr[0];
    } catch(e) { result.innerHTML = 'Can&nbsp;not&nbsp;be&nbsp;calculated'; }
}