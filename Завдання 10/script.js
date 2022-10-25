const x = 2;

const isOdd = x % 2 === 0;
const length = `${x}`.length;

let message = isOdd ? 'парне' : 'непарне';
message += length === 1 ? ' однозначне' :
            length === 2 ? ' двозначне' : ' тризначне';
message += ' число';
console.log(message);