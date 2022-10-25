const a = +prompt('enter A');
const b = +prompt('enter B');
const c = +prompt('enter C');

const isPossible = a+b > c && a+c > b && b+c > a;

if(isPossible){
    alert('Triangle is possible');
}else{
    alert('Triangle is impossible');
}