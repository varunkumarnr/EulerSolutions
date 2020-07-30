/* Project Euler: Problem 14: Longest Collatz sequence*/
function longestCollatzSequence(limit) {
    var max = 1;
    var cur ;
    var st = 0
    for(var i = 1 ; i<=limit ; i++ ){
      cur = collatz(i);
      
      //console.log(i, cur);
      //console.log(max);
      if(max<cur){
        max = cur;
        st = i
        //console.log(max);
      }
      //console.log(max);
    }
    console.log(st);
    return st;
  }
  function collatz(n){
    var count = 0;
    while(n !== 1) {
      if(n % 2 === 0) {
        n /= 2;
      } else {
        n = (3 * n) + 1;
      }
      count++;
    }
    //console.log(count);
    return count;
  }


  
  //collatz(9);
  
  longestCollatzSequence(14);