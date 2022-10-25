let a = 4;
let b = 7;
let c =  12;

if ((a<=b && b<=c)||(a>=b && b>=c)){
    a*=2;
    b*=2;
    c*=2;
} else {
    a*=-1;
    b*=-1;
    c*=-1;
}
console.log(a, b, c);