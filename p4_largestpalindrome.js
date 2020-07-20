function checkpalindrome(num){
var stor = num;
var temp =0;
var sum = 0; 
while(num>0){
    temp = num % 10;
    sum = (sum*10) + temp;
    num = Math.floor(num /10);
}
return sum;
}
function largestPalindromeProduct(n) {
   var min =  Math.pow(10, n-1);
   //console.log(min);
   var max = Math.pow(10,n);
   //console.log(max);
   var prod ;
   var revprod;
   var palind = [];
   
   for (let i = max-1; i >= min; i--) {
    
    for (let j = max-1; j >= min; j--) {
            prod = i*j;
            revprod = checkpalindrome(prod);
            if(prod === revprod){
                palind.push(prod);
          }
        }
    }
    

   console.log(Math.max(...palind));
  }
  
  largestPalindromeProduct(3);