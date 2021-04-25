const arr = [1,2,3,4,5];

const newarr = arr.map((value, index, array) => {
    return value + 10;
});
debugger;

console.log(newarr);


const arr2 = [11,12,13,14,15];

const newli = arr.map((value, index, array) => {
    return `<li key=${index}>${value}</li>`
});


console.log(newarr);
console.log(newli);