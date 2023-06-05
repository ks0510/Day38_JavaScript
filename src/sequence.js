//1)To get single digit random number
console.log(Math.floor(Math.random()*10));

//2)To get dice number between 1 to 6
console.log(Math.floor(Math.random()*6+1));

//3)To get two random dice numbers and add it
let a = (Math.floor(Math.random()*6+1));
let b = (Math.floor(Math.random()*6+1));
console.log(a+b);

//4)To get 5 two digit random numbers

let r1 = Math.floor(Math.random() * 90 + 10);
let r2 = Math.floor(Math.random() * 90 + 10);
let r3 = Math.floor(Math.random() * 90 + 10);
let r4 = Math.floor(Math.random() * 90 + 10);
let r5 = Math.floor(Math.random() * 90 + 10);

console.log(r1+r2+r3+r4+r5);
console.log((r1+r2+r3+r4+r5)/5);

//5)To convert units and find area
//a)Convert unit
let ans1 = 42/12;
console.log(ans1+" ft");

//b)Rectangular Area of plot
let ans2 = 60*40;
let area = ans2/3.28;
console.log(area+" meters");

//c)Area of 25 plots
let area2 = (area*25)/4046.9;
console.log(area2+" acres");


