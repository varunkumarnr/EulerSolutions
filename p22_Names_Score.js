//Project Euler: Problem 22: Names scores
// Using names, an array defined in the background containing over five-thousand first names,
//begin by sorting it into alphabetical order. Then working out the alphabetical value for each name,
//multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53,
//is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the array?
const nameScoresCalc = (word) => {
  let alphabets = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let total = 0;
  for (i = 0; i < word.length; i++) {
    total += alphabets.indexOf(word[i].toLowerCase());
    //console.log(total);
  }
  return total;
};

const namesScores = (arr) => {
  arr = [...arr].sort();
  //console.log(arr);
  arr.unshift("");
  //console.log(arr);
  let sum = 0;
  for (let i = 1; i < arr.length; i++) sum += nameScoresCalc(arr[i]) * i;
  console.log(sum);
  return sum;
};
const test1 = ["THIS", "IS", "ONLY", "A", "TEST"];
const test2 = ["I", "REPEAT", "THIS", "IS", "ONLY", "A", "TEST"];

namesScores(test1);
