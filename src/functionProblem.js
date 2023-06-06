//Functions
let temp1 = prompt("Enter Temprature");
let temp2 = prompt("Enter Temprature");
function degreetoFarenheit(temp){
    return (temp*(9/5))+32;
}
console.log(degreetoFarenheit(temp1));
function farenheittoDegree(temp){
    return (temp-32)*(5/9);
}
console.log(farenheittoDegree(temp2));

//2)
function Palindrome(){
		var rem, temp, final = 0;
		var number = Number(document.getElementById("N").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			window.alert("The inputed number is Palindrome");
		}
		else
		{
			window.alert("The inputted number is not palindrome");
		}
	}

//3)Write function for prime number and palidrome
//a)To check number
let number2 = prompt("Enter number");

function checkPrimeNumber(num){
	let count = 0;
	for(let i=1;i<num/2;i++){
		if(num%i==0){
			count++;
		}
	}
	if(count<2){
		console.log("Number is Prime");
	}
	else{
		console.log("Number is not prime");
	}

}
checkPrimeNumber(number2);

//b)To get palidrome
function generatePalidrome(num){
	let rem=0;
	let temp=0;

	while(num>0){
		rem = num%10;
		num = parseInt(num/10);
		temp = temp*10+rem;
	}

	console.log(temp);
}

let number3 = prompt("Enter number to generate palidrome");
generatePalidrome(number3);

//c)To check palidrome and prime

function checkPrimePalidrome(num){

	let rem=0;
	let temp=0;

	while(num>0){
		rem = num%10;
		num = parseInt(num/10);
		temp = temp*10+rem;
	}

	if(num==temp){
		let count = 0;
	    for(let i=1;i<num/2;i++){
			if(num%i==0){
			count++;
		    }
			if(count<2){
		    console.log("Number is Palidrome and prime also");
	        }
	        else{
		    console.log("Number is palidrome but not prime");
	        }
	    }
    }
	else{
		console.log("Number is not palidrome");
	}

}

let number4 = prompt("Enter number to check");

checkPrimePalidrome(number4);