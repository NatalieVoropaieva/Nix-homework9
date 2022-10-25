let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let property in salaries){
    sum+=salaries[property];
}
alert(sum)