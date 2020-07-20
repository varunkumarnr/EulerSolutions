function largestPrimeFactor(number) {
 
 var prime = 2;
 max = 1;
 while(prime<=number){
     if(number  % prime == 0){
         max = prime;
         number = number / prime;
     }else {
         prime++;
     }
 }
 
console.log(max);
 return max;
}

largestPrimeFactor(13195);