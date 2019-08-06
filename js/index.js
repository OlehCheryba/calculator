let marks = ['+', '-', '*', '/'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
document.querySelector('#reset').addEventListener("click", () => {
    document.querySelector('#inputExpression').value = '';
    document.querySelector('#result').value = 'Result'
});
document.querySelector('#inputExpression').addEventListener("input", calculate);
function calculate() {
    let input = document.querySelector('#inputExpression').value.split('');
    input = input.filter(el => marks.includes(el) || numbers.includes(el));
    let okArr = ['',];
    input.forEach((el, ind) => {
        if (numbers.includes(el)) {
            okArr[okArr.length - 1] += el
        }
        else if (marks.includes(el)) {
            if (!marks.includes(input[ind + 1]) && ind != 0) {
                okArr.push(el);
                okArr.push('');
            }
        }
    });
    if (okArr[0] === '') {
        document.querySelector('#result').value = 'Result';
        return;
    }
    console.log(okArr);
    document.querySelector('#inputExpression').value = okArr.join('');
    let num=0;
    try {
        for (let i = 0; ; i++) {
            if (okArr[i] == undefined) break;
            if (okArr[i] == '*' || okArr[i] == '/')  {
                if (okArr[i] == '*') {
                    if (okArr[i+1] === '') {
                        throw new Error('Can not be calculated')
                    }
                    num = Number(okArr[i - 1]) * Number(okArr[i + 1]);
                }

                else if (okArr[i] == '/') {
                    if (okArr[i+1] === '' || okArr[i+1] === '0') {
                        throw new Error('Can not be calculated')
                    }
                    num = Number(okArr[i - 1]) / Number(okArr[i + 1]);
                }

                okArr.splice(i - 1, 3, num)
                i--
            }
        }

        for (let i = 0; ; i++) {
            if (okArr[i] == undefined) break;
            if (numbers.includes(okArr[i])) okArr[i] = +okArr[i];
            if (okArr[i] == '+' || okArr[i] == '-') {
                if (okArr[i] == '+') num = Number(okArr[i - 1]) + Number(okArr[i + 1]);

                else if (okArr[i] == '-') num = Number(okArr[i - 1]) - Number(okArr[i + 1]);

                okArr.splice(i - 1, 3, num)
                i--
            }
        }

        document.querySelector('#result').value = okArr.join('');
    } catch(e) {
        document.querySelector('#result').value = e;
    }
}
