function sumSquareDifference(n) {
 var sumofsq = 0;
 var sqofsum = 0;
 var diff;
 var total;
sumofsq =  (n*(n+1)*(2*n+1))/6;
//console.log(sumofsq);
 for(var i=1;i<=n;i++){
    // sumofsq = Math.pow(sumofsq,2) + Math.pow(i,2);  
     sqofsum = sqofsum +i;  
 }
// console.log(sumofsq);
//console.log(Math.pow(sumofsq,2));
 total = Math.pow(sqofsum,2);
 diff = total - sumofsq;
 console.log(diff);
 return diff;
}

sumSquareDifference(100);