const y = 1200;

if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}