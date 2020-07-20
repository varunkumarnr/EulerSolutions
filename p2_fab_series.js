function fiboEvenSum(n) {
     var first = 1;
     var second = 2;
     var value = 3;
     var sum = 2;
     if(n<=1){
         return 0;
     }else{
         while(value<n){
             if(value %2 == 0){
                 sum += value;
             }
             first = second;
             second = value;
             value = first + second;
         }

     }
     console.log(sum);
    return sum;
  }
  
  fiboEvenSum(10);