const isCm = confirm('Переводимо сантиметри в дюйми?');
if(isCm) {
    const cm = prompt('Введи кількість сантиметрів, які необхідно перевести в дюйми');
    const d = +cm/2.54;
    alert(d);
}else {
    const d = prompt('Введи кількість дюймів, які необхідно перевести в сантиметри');
    const cm = +d*2.54;
    alert(cm);
}