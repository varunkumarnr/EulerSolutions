/* Project Euler: Problem 17: Number letter counts */
function numberLetterCounts(num) {
  var lenHundred = 7;
var lenThousand = 8;
var lenPlaceOnes = [0,3,3,5,4,4,3,5,5,4];
var lenPlaceTens = [0,3,6,6,5,5,5,7,6,6];

    var sum = 0;

    for (var i = 1; i <= num; i++) {
        var placeOnes = i % 10;
        var placeTens = Math.floor(i / 10) % 10;
        var placeHundreds = Math.floor(i / 100) % 10;
        var placeThousands = Math.floor(i / 1000) % 10;
        sum += lenPlaceOnes[placeOnes];
        sum += lenPlaceTens[placeTens];
        if (placeHundreds != 0) {
            sum += lenHundred + lenPlaceOnes[placeHundreds];
        }
        if (placeThousands != 0) {
            sum += lenThousand + lenPlaceOnes[placeThousands];
        }

        if (placeTens == 1) {
            
            switch (placeOnes) {
                case 4:
                case 6:
                case 7:
                case 9:
                    sum += 1;
                    break;
            }
        }
        if (i > 100 && i % 100 != 0) {
            sum += 3;
        }
    }
    console.log(sum);

    return sum;
}
numberLetterCounts(151);