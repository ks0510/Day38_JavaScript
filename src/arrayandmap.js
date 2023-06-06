let numbers = [1,2,3,4,5,6,7];

let names = ["kaif","abc","Pqr"];

console.log(numbers);

console.log(names);

console.log(numbers[2]);

numbers.push(8);
console.log(numbers.length);

let index = numbers.indexOf(7);

names.forEach(function (name){
    console.log(name);
});

let numValues = [1,2,3,4,5,6,7];

let squareNumbers = numValues.map(function (num){
    return num*num;
});

console.log(squareNumbers);

let array1 = ["Kaif","Sam","alex","pqr"];

let uppercaseNames = array1.map(function(name){
    return name.toUpperCase();
});
console.log(uppercaseNames);

let personDetails = [
    {name :"Kaif",age:23,address:""}
]