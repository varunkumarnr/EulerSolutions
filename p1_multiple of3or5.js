function multiplesOf3and5(number) {
    var total = 0;
   for(var i = 3;i<number;i++){
     if(i%3==0 || i%5 == 0){
       total = total+i;
     }
   }
   return total;
  }
  
  console.log(multiplesOf3and5(1000));
  