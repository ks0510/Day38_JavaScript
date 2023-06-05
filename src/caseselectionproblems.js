//1)To read number and print in word
let number = prompt("enter number");

switch(number){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;   
    case 4:
        console.log("Four");
        break;        
    case 5:
        console.log("Five");
        break;        
    case 6:
        console.log("Six");
        break;        
    case 7:
        console.log("seven");
        break;        
    case 8:
        console.log("Eight");
        break;        
    case 9:
        console.log("Nine");
        break;        
    case 10:
        console.log("Ten");
        break;        
    default:
        console.log("Invalid number");
          
}


//2)To print weekday
let dayNumber = prompt("Enter day number")
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);


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

 //4)Unit Conversion

 let a = prompt("Enter measure to convert unit");

 let choice = prompt("Enter your choice");

 switch(choice){
    case 1:
        console.log(a*12);
        break;
    case 2:
        console.log(a*0.304); 
        break;
    case 3:
        console.log(a*0.0833);
        break;
    case 4:
        console.log(a* 3.28084);    

    default:
        console.log("Invalid choice");    
 }