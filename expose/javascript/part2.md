# Part 2 Answers

## discountPrices var function

1. What will happen at line 12 and why? If the code causes an error, explain why.
    At line 12 the value 3 will be printed out in the console log. This is because the variable of i is declared using the keyword of var and thus while in the function scope of discountPrices, this value can be accessed even after the for loop.
2. What will happen at line 13 and why? If the code causes an error, explain why. 
    Line 13 prints the value of 150 to the console. Because discountedPrice was declared with the var keyword, its value can be accessed outside of the for loop as it is still within the function scope and it returns the last calculated discount price of 50% off of 300 which is a price of 150.
3. What will happen at line 14 and why? If the code causes an error, explain why.
    On line 14 the value 150 is printed to the console log. This is because the last finalPrice value in the 3rd iteration of the for loop recorded was the rounded number of 300*(1-0.5) which is equal to 150. Since finalPrice was declared with a var keyword, it was manipulated inside the for loop and can be accessed outside of it while within the function scope.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    This function will return an array of [50,100,150]. These are the calculated discounted prices that were rounded and pushed into the array in the for loop and then returned on line 16.
5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    At line 12 the code will attempt to return the value of i but it will return an error of i is not defined. This is because i was declared with the let keyword within the for loop and thus when attempted to be accessed outside of the for loop it returns an error as that specific i variable can only be accessed within that for loop.
6. What will happen at line 13 and why? If the code causes an error, explain why.
    At line 13 the code will attempt to print the value of discountedPrice but instead it will return an error of discountedPrice is not defined. This is because the variable is declared with the let keyword within the for loop and can thus only be accessed within the for loop.
7. What will happen at line 14 and why? If the code causes an error, explain why. 
    At line 14 the code will print 150. Since finalPrice was initialized outside of the for loop with the let keyword, it can still be accessed after the for loop and return the last finalPrice value of 150.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    The function will return the array of [50, 100, 150] as those are the calculated and rounded discounted prices that were pushed into the array using the for loop.
9. What will happen at line 11 and why? If the code causes an error, explain why.
    The code will return an error as it cannot return the value of the variable i which has a scope confined by the for loop due to it being declared with the let keyword.
10. What will happen at line 12 and why? If the code causes an error, explain why.
    Line 12 will return the value of 3 which is the length of the prices array. As the constant was declared and never changed it can be pritned to the console log as intended by the code.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    This function will return the array of [50,100,150]. These are the discounted prices that were pushed to the 'discounted' array in the for loop.

## Data Types
12. Given the Object here are the notations:
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

## Arithmetic
13. Arithmetic Questions:
    A. '3' + 2 = '32' because the integer of 2 is mapped to its string representation.
    B. '3' - 2 = 1 because '3' was mapped to its integer representation
    C. 3 + null = 3 because null was converted into the integer of 0
    D. '3' + null = '3null' because null was converted into the string 'null' and concatenated with 3.
    E. true + 3 = 4 because true was converted into the integer of 1.
    F. false + null = 0 because both boolean values were converted to their integer equivalent of 0.
    G. '3' + undefined = '3undefined' because undefined was converted to the string 'undefined' and then was concatenated with 3.
    H. '3' - undefined = NaN because undefined was converted to a NaN and the result of subtraction with that is only NaN.

## Comparison
14. Comparisons:
    A. '2' > 1 returns as true because the value of '2' was converted to its integer value of 2.
    B. '2' < '12' returns as false because it compares it's order in Unicode in which '2' is at a higher number than '12'.
    C. 2 == '2' returns as true because the string of '2' becomes its integer value of 2 and so they match.
    D. 2 === '2' returns as false as it checks for strict equality and does not include type conversion and since '2' is not the same as 2 it returns false.
    E. true == 2 returns as false because the value of true is converted to the integer 1 which is not equal to 2.
    F. true === Boolean(2) returns as true because 2 is converted to the Boolean value of true so even with the strict equality check, the operator handles the type conversion.

15. Explain the difference between the == and === operators.
    While both operators check for equality, == allows for type conversion when comparing two values while === compares two values without converting either value into any other data types. This can lead to expressions returning as true or false or other values depending on which operator is being used.

## Loops
16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.'
    See part2-question16.js file.

## Functions
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    The result will be [2, 4, 6] as the doSomething function that is used as a callback function will double each integer in the input array and then output the value into a new array that is returned by the function modifyArray.

## Timeouts
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)
    See file part2-question18.

19. What is the output of the above code?
    The code outputs 1, 4, 3, and then 2. This is because the timeouts make 3 and 2 print last but 2 has a longer timeout time.