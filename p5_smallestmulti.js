//Problem 5: Smallest multiple
/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?*/
function LCM(a,b){
return (a*b)/GCD(a,b);
}
function GCD(a,b){
if(b===0){
    return a;
}else{
    return GCD(b,a%b);
}
}
function smallestMult(n) {
    var maxLCM = 1;
  for(var i = 2; i <= n; i++ ){
  maxLCM = LCM(maxLCM,i);
  }
  console.log(maxLCM);
  return maxLCM;

}
  
smallestMult(20);
  