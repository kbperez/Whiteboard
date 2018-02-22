## Code Challenge - Feb. 21, 2018

Given a string of words, find the highest scoring word.  Each letter has points based on position in alphabet (a=1, z=26).  Return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

## Pseudo code
1. Create a copy of input sting.
2. Split by white space to get words
3. For loop for each word
4. Split each word by nothing
5. Convert each letter to a value using some build in function
6. Loop reduce each word to a value
7. Keep track of the word that has the highest value with conditional
8. Return the word
