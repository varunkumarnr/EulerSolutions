/*Project Euler: Problem 18: Maximum path sum I */

 function maximumPathSumI(input) {
     console.log(input[2][0]);
    for (var row = input.length - 2; row >= 0; row--) {
        for (var col = 0; col < input[row].length; col++) {
            input[row][col] += Math.max(input[row+1][col], input[row+1][col+1]);
            console.log(input[row][col]);
        }
    }
    return input[0][0];
};

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

console.log(maximumPathSumI(testTriangle));
