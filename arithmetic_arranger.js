function arithmetic_arranger(input) {
  if (input.length > 5) {
    return 'Error: Too many problems.';
  }
  var line1 = [];
  var line2 = [];
  var line3 = [];
  for (let i = 0; i < input.length; i++) {
    problem = input[i].split(' ');
    let num1 = problem[0];
    let operator = problem[1];
    let num2 = problem[2];
    if (isNaN(num1) || isNaN(num2)) {
      return 'Error: Numbers must only contain digits.';
    }
    if (num1.length > 4 || num2.length > 4) {
      return 'Error: Numbers cannot be more than four digits.';
    }
    if (operator !== '-' && operator !== '+') {
      return "Error: Operator must be '+' or '-'.";
    }
    let width;
    if (num1.length > num2.length) {
      width = num1.length + 2;
    } else {
      width = num2.length + 2;
    }
    line1.push(num1.padStart(width, ' '));
    line2.push(operator + num2.padStart(width - 1, ' '));
    line3.push('-'.repeat(width));
  }
  return line1.join('    ') + '\n' + line2.join('    ') + '\n' + line3.join('    ');
};
console.log(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49", '1 + 2']));
