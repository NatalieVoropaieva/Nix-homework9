let a = 4;
let b = 7;
let c =  12;

const lB = Math.abs(a - b);
const lC = Math.abs(a - c);
if (lB <= lC) {
    console.log("B", lB);
} else {
    console.log("C", lC);
}