# Part 1 Answers

## sumValues var function

1. What is printed by line 9? If the code returns an error, explain why.
    Line 9 prints values added: 20
2. What is printed by line 13? If the code returns an error, explain why.
    Line 13 prints out final result: 20.
3. Why should you not use var? Explain why.
    You shouldn't use var because it used to have function scope, which means it's value when initialized in a function remains accessible from anywhere in that same function. This means two for loops both using var i = 0; would be using the same variable and could lead to unintended results.

## sumValues let function

4. What is printed by line 9? If the code returns an error, explain why.
    Line 9 prints values added: 20.
5. What is printed by line 13? If the code returns an error, explain why. 
    The code returns an error of "result is not defined." Since the result variable was declared with the let keyword, it has block scope which means it only exists within the if statement it was declared and so when line 13 runs, it doesn't know of any variable with the name result and therefore returns an error.

## sumValues const function

6. What is printed by line 9? If the code returns an error, explain why.
    The code returns an error of "Cannot assign to "result" because it is a constant." This is because constant values cannot be changed and the code ran into an error on line 4 where the const value of result was attempted to change to num1+num2.

7. What is printed by line 13? If the code returns an error, explain why.
    As explained in problem 6, the code returns an error of "Cannot assign to "result" because it is a constant." This was because in line 4 the code was attempting to change the value of the constant variable of result.