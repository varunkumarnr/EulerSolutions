/* Project Euler: Problem 16: Power digit sum*/ 
function powerDigitSum(exponent) {
    var number = [1],
    sum = 0;

for(var i = 0; i < exponent; i++)
{
    var overflow = 0,
        count = number.length + 1

    for(var j = 0; j < count; j++)
    {
        var digit = number[j] || 0;

        digit = 2 * digit + overflow;

        if(digit > 9)
        {
            digit -= 10;
            overflow = 1;
        }
        else
        {
            overflow = 0;
        }

        number[j] = digit;
    }
}

for(var i = 0; i < exponent; i++)
{
    sum += number[i];
}

console.log(sum);
return sum;
    
}
powerDigitSum(15);
