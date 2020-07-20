/*
Project Euler: Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.*/

function primeSummation(n) {
  
    // Initializing the array and sum which hold all prime numbers and the total sum, respectively
    let nums = []
    let sum = 0;
    
    // Upperbound of `n`
    const upperBound = Math.ceil(Math.sqrt(n));
    
    // Making an array of `n` numbers
    for (let i = 0; i < n; i++){
      nums.push(i);   
    }
    nums[1] = 0;
    
    // Looping until the upperbound
    for (let i = 2; i <= upperBound; i++){
      
      // Skipping if the number is already 0
      if (nums[i] !== 0){
      
        // Explcitly marking all multiples of `i` 0 
        for (let j = i*i; j < n; j += i){
          if (nums[j] % i == 0) {
            nums[j] = 0;
          }
        }
      }
    }
    
    // Sum and return all values in the array up to `n`
    for (let i = 0; i < n; i++){
      sum += nums[i];
    }
    console.log(sum);
    return sum;
  }
  primeSummation(2000000);
