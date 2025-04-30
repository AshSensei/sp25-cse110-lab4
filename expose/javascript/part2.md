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