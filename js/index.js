const marks = ['+', '-', '*', '/', '^'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

document.querySelector("#keyboard").style.display = 'none';
function calculate() {
    let inputEx = document.querySelector('#inputEx').value.split('');
    let okArr = ['',],  number=0;

    inputEx = inputEx.filter(el => marks.includes(el) || numbers.includes(el));
    inputEx.forEach((el, ind) => {
        if (el === '.' && !(inputEx[ind + 1] == '.') && !marks.includes(inputEx[ind + 1]) && ind !== 0 && !okArr[okArr.length - 1].includes('.')) {
            if (marks.includes(inputEx[ind - 1])) {
                okArr[okArr.length - 1] += '0' + el;
            }
            else okArr[okArr.length - 1] += el
        }
        else if (numbers.includes(el) && el !== '.') {
            okArr[okArr.length - 1] += el
        }
        else if (marks.includes(el)) {
            if (!marks.includes(inputEx[ind + 1]) && ind != 0) {
                okArr.push(el);
                okArr.push('');
            }
        }
    });
    if (okArr[0] === '') {
        document.querySelector('#inputEx').value = '';
        document.querySelector('#result').innerHTML = 'Result';
        return;
    }
    console.log(okArr);
    document.querySelector('#inputEx').value = okArr.join('');
    try {
        for (let i = 0; ; i++) {
            if (!(okArr.includes('^'))) break;
            if (okArr[i] == '^') {
                if (okArr[i+1] === '') {
                    throw new Error('Can&nbsp;not&nbsp;be&nbsp;calculated');
                }
                number = Math.pow(Number(okArr[i - 1]), Number(okArr[i + 1]));
                okArr.splice(i - 1, 3, number);
                i--;
            }
        }
        for (let i = 0; ; i++) {
            if (!(okArr.includes('/')) && !(okArr.includes('*'))) break;
            if (okArr[i] == '*' || okArr[i] == '/')  {
                if (okArr[i] == '*') {
                    if (okArr[i+1] === '') {
                        throw new Error('Can&nbsp;not&nbsp;be&nbsp;calculated');
                    }
                    number = Number(okArr[i - 1]) * Number(okArr[i + 1]);
                }

                else if (okArr[i] == '/') {
                    if (okArr[i+1] === '' || okArr[i+1] === '0') {
                        throw new Error('Can&nbsp;not&nbsp;be&nbsp;calculated');
                    }
                    number = Number(okArr[i - 1]) / Number(okArr[i + 1]);
                }

                okArr.splice(i - 1, 3, number)
                i--
            }
        }
        for (let i = 0; ; i++) {
            if (!(okArr.includes('-')) && !(okArr.includes('+'))) break;
            if (numbers.includes(okArr[i])) okArr[i] = +okArr[i];
            if (okArr[i] == '+' || okArr[i] == '-') {
                if (okArr[i] == '+') num = Number(okArr[i - 1]) + Number(okArr[i + 1]);

                else if (okArr[i] == '-') num = Number(okArr[i - 1]) - Number(okArr[i + 1]);

                okArr.splice(i - 1, 3, num)
                i--
            }
        }
        document.querySelector('#result').innerHTML = okArr.join('');
    } catch(e) { document.querySelector('#result').innerHTML = e; }
}