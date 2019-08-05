document.querySelector('#inputExpression').addEventListener("input", () => {
    let input = document.querySelector('#inputExpression').value.split('');
    input = input.filter(el => el === '0' || el === '+' || el === '-' || el === '1' || el === '2' || el === '3' || el === '4');
    let sum ='', okArr = [];
    input.forEach((el, ind) => {
        if (input[ind+1] === '+' || input[ind+1] === '-') {
            sum+=el;
            okArr.push(sum);
            sum ='';
        }
        else if (input[ind] === '+' || input[ind] === '-') {
            okArr.push(el);
            sum = '';
        }
        else {
            sum+=el;
        }
        //sum+=el;
    });

    console.log(input);
    document.querySelector('#inputExpression').value = okArr.join('');
})
function calculate(arr) {

}