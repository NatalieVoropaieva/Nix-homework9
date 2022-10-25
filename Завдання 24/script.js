const number = prompt('enter your 3-digit number:');
const isEven = parseInt(number, 10)%2 === 0;
if (!isEven){
    let mul = 1;
    for (let i = 0; i < number.length; i++){
        let currentNumber = number[i];
        const num = parseInt(currentNumber, 10);
        mul *= num;
    }
    alert(mul)
}else{
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        let currentNumber = number[i];
        const num = parseInt(currentNumber, 10);
        sum += num;
    }
    alert(sum)
}
