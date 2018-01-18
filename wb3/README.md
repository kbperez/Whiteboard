# Whiteboard Challenge 3

Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose, and console.log the number of passengers in each car as your progress. Each car, including the engine will have the following signature: js { <engine> value: 2, next: { <next car> value: 16, next: { <next car> } }

My tests for this function are:
1. Is the input an object?  If not, return null.
2. Are all the value inputs integers?  If not, return a string "only integers".
3. Does the function work correctly? Check for the correct answer. 
