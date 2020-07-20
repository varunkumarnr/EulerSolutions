/*
Project Euler: Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.*/

function primeSummation(n) {
 let res =[];
 let total = 0; 
 const max = Math.ceil(Math.sqrt(n));
for (let i = 0; i < n; i++){
        res.push(i);   
}
res[1] = 0;    
for(let i = 2; i <= max ;i++){
    if(res[i] !== 0){
        for(let j = i*i; j<n;j+=1){
            if (res[j] % i == 0) {
                    res[j] = 0;
                }
             }
         }
}
 for(var i = 0 ;i<res.length;i++){
     total+= res[i];
 }
 console.log(total);
 return total;
}
primeSummation(2000000);
  