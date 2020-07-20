/*Project Euler: Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n. */
function productabc(a,b,c){
   return a*b*c;
}
function checkpythogurous(a,b,c){
    if((Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2))){
        return 1;
    }
    else{
        return 0;
    }
}
//console.log(checkpythogurous(3,4,5))
function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
   
    
   }
   
   specialPythagoreanTriplet(1000);