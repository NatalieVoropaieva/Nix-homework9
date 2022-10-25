const x = -2;

const isOdd = x % 2 === 0;
const isNegative = x < 0;

if (x === 0) {
    console.log("нульове число");
} else {
    let message = isNegative ? 'негативне' : 'позитивне';
    message += isOdd ? ' парне' : ' непарне';
    message += ' число';
    console.log(message);
}