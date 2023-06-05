//1) Find samllest and largest number
let a =  Math.floor( Math.random()*900 ) + 100;
let b =  Math.floor( Math.random()*900 ) + 100;
let c =  Math.floor( Math.random()*900 ) + 100;
let d =  Math.floor( Math.random()*900 ) + 100;
let f =  Math.floor( Math.random()*900 ) + 100;

if (a>b && a>c && a>d && a>f){
    console.log("Largest number "+a);
}
else if (b>a && b>c && b>d && b>f){
    console.log("Largest number "+b);
}
else if (c>a && c>b && c>d && c>f){
    console.log("Largest number "+c);
}
else if (d>a && d>c && d>b && d>f){
    console.log("Largest number "+d);
}
else{
    console.log("Largest number "+f);
}

if (a<b && a<c && a<d && a<f){
    console.log("Smallest number "+a);
}
else if (b<a && b<c && b<d && b<f){
    console.log("Smallest number "+b);
}
else if (c<a && c<b && c<d && c<f){
    console.log("Smallest number "+c);
}
else if (d<a && d<c && d<b && d<f){
    console.log("Smallest number "+d);
}
else{
    console.log("Smallest number "+f);
}

//2)To take date and print true or false
var date = prompt("Enter date");
var month = prompt("Enter month"); 
if(month==3 && date>=20){
    console.log("true");
}
else if(month==6 && (date<=20 && date>0)){
    console.log("true");
}
else if((month>4 && month<6) && (date>0 && date<32)){
    console.log("true");
}
else{
    console.log("false"); 
}

//3)To check leap year
const year = prompt('Enter a year:');
//three conditions to find out the leap year
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

//4) To flip coin
let num = Math.random();

if (num < 0.5) {
  console.log("HEAD");
} else {
  console.log("TAIL");
}