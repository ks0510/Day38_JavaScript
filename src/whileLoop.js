//1)2 power upto 256
let result=0;
let power=1;

while(result<=256){
    result = Math.pow(2,power);
    console.log(result);
    power++;
}

//2)To find Magic Number
let number = prompt("Enter number to be find");
let low = 0;
let high = 100;
let mid;
while(number!==mid){
    mid = (low + high)/2
    if (number ==mid){
        console.log("Number found");;
    }    
    else if (number > mid){
        low = mid + 1;
    }    
    else{                       
        high = mid - 1;
    }
}

//3)Filp coin
let headCount=0;
let tailCount=0;
while(headCount!==11 || tailCount!==11){
    let num = Math.random();
    if (num < 0.5) {
        headCount++;
    } else {
        tailCount++;
    }
}
if(headCount==11){
    console.log("Head wins 11 times");
}
else{
    console.log("Tail wins 11 times");
}

//4)Gambling game
let bet=1;
money = 100;
while(money!==0 || money==200){

    let num = Math.random();
    if (num < 0.5) {
        money+=bet;
    } else {
        money-=bet;
    }
}
if(money==200){
    console.log("Player reached his goal");
}
else{
    console.log("Player lost all money");
}