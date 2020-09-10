//Project Euler: Problem 21: Amicable numbers
function sumAmicableNum(n) {
  function d(n) {
    let output = [];
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        output.push(i);
      }
    }
    if (output.length === 0) {
      return 0;
    } else {
      return output.reduce((a, b) => (a += b));
    }
  }

  let amicNums = [];

  for (let i = 1; i < n; i++) {
    let r1 = d(i);
    let r2 = d(r1);
    if (i === r2 && i !== r1 && amicNums.indexOf(i) === -1) {
      amicNums.push(i, r1);
    }
  }
  console.log(amicNums.reduce((a, b) => (a += b)));
  return amicNums.reduce((a, b) => (a += b));
}

sumAmicableNum(1000);
