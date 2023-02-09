/*

# Calculator Challenge

Now that you know how to write functions and use control structures like if statements and switches, let's try to write a simple calculator.

**Instructions:**

Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

**Example:**

```
calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '%') // returns an error message
```
*/

const calculator = (num1, num2, oprator) => {
  switch (oprator) {
    case '-':
      result = num1 - num2;
      return result;

    case '+':
      result = num1 + num2;
      return result;

    case '*':
      result = num1 * num2;
      return result;

    case '/':
      result = num1 / num2;
      return result;

    default:
      return 'Invalid operator';
  }
};

console.log(calculator(3, 4, '*'));//12
console.log(calculator(3, 4, ''));//Invalid operator

