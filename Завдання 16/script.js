let n = 10;
let simple = [];

for (let i = 2; i<=n; i++) {
    let hasDivision = false;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            hasDivision = true;
            break;
        }
    }
    if (!hasDivision) simple.push(i);
}

console.log(simple.join(','));