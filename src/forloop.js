//1)
let num = prompt("Enter number");
for(let i=1;i<=num;i++){
    console.log(Math.pow(2,i));
}

//2)Nth harmonic number
let value =0;
let num2 = prompt("Enter number");
for(let i=1;i<=num2;i++){
    value+= (1/i);
}
console.log(value);

//3)To find prime Number
let num3 = prompt("Enter number to check prime or not");
let count=0;
for(let i=1;i<num3/2;i++){
    if(num3%i==0){
        count++;
    }
}
if(count>1){
    console.log("Number is not prime");
}
else{
    console.log("Number is prime");
}

//4) To find prime numbers in given range

let num4 = prompt("enter number for range");

for(let k=2;k<=num4;k++){
    let count1=0;
    for(let j=1;j<num3/2;j++){
        if(k%j==0){
            count1++;
        }
    }
    if(count1>1){
        console.log("Number is not prime");
    }
    else{
        console.log("Number is prime");
    }
}

//5)To find factorial
let num5 = prompt("Enter number to find factorail");
let factorial=1;
for(let i=1;i<num5;i++){
    factorial=factorial*i;
}
console.log(factorial);