const a = '1411';

const length = a.length;
let sum = 0;

for (let i = 0; i < a.length; i++){
    let currentNumber = a[i];
    const number = parseInt(currentNumber, 10);
    sum += number;
}
alert(`${length}, ${sum}`)