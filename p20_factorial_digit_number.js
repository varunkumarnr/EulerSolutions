// //Project Euler: Problem 20: Factorial digit sum
// function sumFactorialDigits(n) {
//     var product = 1;
//     var sum = 0;
//     var temp ;
//    for(i=1;i<=n;i++){
//        product = product * i;
//    }
//    while(product>0){
//         temp = product % 10;
//         sum = (temp+sum);
//         product =  Math.floor(product /10);
//    }
//    console.log(sum);
//    return sum;
//   }
  
//   sumFactorialDigits(10);

function fact(x){
    
    console.log(x);
    let acc = 1n;
    while (x > 1n) {
      acc = acc * --x;
    }
    console.log(acc);
    return acc;
  }
  function sumFactorialDigits(x) {
    let str = x.toString();
    let sum = 0;
    for (let char of str) {
      sum += +char;
    }
    console.log(sum)
    return sum;
  }
  factorial = fact(10n)
  sumFactorialDigits(factorial);


  