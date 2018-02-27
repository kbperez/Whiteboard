## Whiteboard Challenge Day 31 - Array Intersection

Write a function to compute the intersection of two arrays.

Example:
*Input*
array1 = [1, 2, 3, 2]
array2 = [2, 3, 6}

*Output*
[2]


### Tests
Test for input - returns null if no input
Test for valid input - returns message is not an array
Test for valid output - is it an array
Test for basic (expected) results

## Big O Notation
The function used 2 for loops and an Array.from(new Set) to remove duplicates so its O(3N) but that's O(N) and an improvement over challenge 4 with O(N^2).
