/*
Project Euler: Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?*/
function nthPrime(n) {
    var flag = 1;
    var res =[2];
    
    var num = 3;
    while(res.length<n){
    let max = Math.ceil(Math.sqrt(num));
    //console.log(num);
    for(var i = 0; res[i]<= max;i++){
        if(num%res[i] == 0){
            flag = 0;
            break;
        }
    }
    if(flag===1){
        res.push(num);
       
    }
    flag=1;
    num += 2;
   }
 
 console.log(res[n-1]);
 return(res[n-1]);
}



nthPrime(10);