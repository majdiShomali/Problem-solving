
// Fibonacci Series:
// Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

let x=0;
let y=1;
let z1;
let arr=[0,1];
function Fibonacci(z) {
  if (z === 377) return 
  arr.push(z);
  
     z1=  x+y;
     x=y;
     y=z1;
     Fibonacci(x+y);

  return ;
}

Fibonacci(1) 
document.write(`Fibonacci = ${arr} <br>`) ;


// The sum of Array Elements:
// Write a program that Calculates the sum of elements in an array 

let arr0=[1,2,3,4];
let i=0;
let le=arr0.length;
let sum=0;
function sumcon(i) {
  if (i==(le)) return 
     sum=sum+arr0[i];
     i=i+1;
     sumcon(i); 
     return sum
}
sumcon(i); 
document.write(`sum= ${sum} <br>`) ;

// Reverse a String:
// Write a program that Reverses a string 
let str="majdi";
let strReversed=[];
let j=str.length;
let k=0;
function Reverse(j) {
  if (j==0) return 
     
     strReversed[j]=str[k];
     k=k+1
     j=j-1;
     Reverse(j); 
     return strReversed
}
Reverse(j); 
document.write(`str reverse= ${strReversed.join("")} <br>`) ;