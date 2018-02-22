## Whiteboard Challenge Day 29 - Anagram list

Write a method to sort an array of strings so that all the anagrams are next to each other

Note - we can use a hash table to map the sorted version of a word to a list of its anagrams

example:

sortAnagrams('acre race care act cat tac') =>

{
  acre : {acre, race, care},
  act: {act, cat, tac},
}
Once all the words have been grouped into lists by anagram we can put them back into the array.


### Tests
Test for input - returns null if no input
Test for valid input - returns message is not an array
Test for valid output - is it an array
Test for basic (expected) results

## Big O Notation
Two loops means O(n^2)
