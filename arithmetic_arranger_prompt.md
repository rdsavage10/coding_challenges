
### Assignment
​
Students in primary school often arrange arithmetic problems vertically to make them easier to solve. For example, "235 + 52" becomes:
```
  235
+  52
-----
```
​
Create a function that receives a list of strings that are arithmetic problems and returns the problems arranged vertically and side-by-side.
​
For example:
​
`arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])`
​
Returns:
```
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```
​
The following rules apply:
* Accepts only addition and subtraction operators. Otherwise, the function should return `Error: Operator must be '+' or '-'.`.
* Accepts between one and five problems. Otherwise, the function should return `Error: Too many problems.`.
* Each number should only contain digits. Otherwise, the function should return `Error: Numbers must only contain digits.`
* Each number is between one and four digits long. Otherwise, the function should return `Error: Numbers cannot be more than four digits.`
* Numbers should be right-aligned.
* There should be a single space between the operator the following number.
* There should be four spaces between each vertically arranged problem.
* There should be dashes at the bottom of each vertically arranged problem. The dashes should run along the entire length of the problem. (The example above shows what this should look like.)
​
The unit tests for this project are in `test_module.py`.
​
### Development
​
Write your code in `arithmetic_arranger.py`. For development, you can use `main.py` to test your `arithmetic_arranger()` function. Click the "run" button and `main.py` will run.
​
### Testing
​
We imported the tests from `test_module.py` to `main.py` for your convenience. The tests will run automatically whenever you hit the "run" button.
​
### Submitting
​
Copy your project's URL and submit it to freeCodeCamp.
