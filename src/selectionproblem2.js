//1)To read number and print in word
let number = prompt("enter number");
if(number==1){
    console.log("One");
}
else if(number==2){
    console.log("Two");
}
else if(number==3){
    console.log("Three");
}
else if(number==4){
    console.log("Four");
}
else if(number==5){
    console.log("Five");
}
else if(number==6){
    console.log("Six");
}
else if(number==7){
    console.log("Seven");
}
else if(number==8){
    console.log("Eight");
}
else if(number==9){
    console.log("Nine");
}
else if(number==10){
    console.log("Ten");
}
else{
    console.log("Invalid Number");
}

//2)To read number and print day according to number
let number2 = prompt("enter day number");
if(number2==1){
    console.log(" Day is Sunday");
}
else if(number2==2){
    console.log("  Day is Monday");
}
else if(number2==3){
    console.log(" Day is Tuesday");
}
else if(number2==4){
    console.log(" Day is Wednesday");
}
else if(number2==5){
    console.log(" Day is Thursday");
}
else if(number2==6){
    console.log(" Day is Friday");
}
else if(number2==7){
    console.log(" Day is Saturday");
}
else{
    console.log("Invalid Day Number");
}

//3)To find unit,ten,hundred values of number

let num = prompt("Enter number");

const placeValue = (num, res = [], factor = 1) => {
    if(num){
       const val = (num % 10) * factor;
       res.unshift(val);
       return placeValue(Math.floor(num / 10), res, factor * 10);
    };
    return res;
 };
 console.log(placeValue(num));

 //4)Arthmetic of three numbers
 let a = prompt("Enter first number");
 
 let b = prompt("Enter second number");
 
 let c = prompt("Enter third number");

 console.log(a+(b*c));
 console.log((a%b)+c);
 console.log(c+(a/b));
 console.log((a*b)+c);