## Whiteboard Challenge Day 26 - Recursive function

Create a utils.js module which exports the methods: map(), filter(), and reduce(), implemented from scratch.

utils.map(arr, callback) accepts an array and a callback.  It returns a new array with the same length as the original, but with the elements modified by callback.

utils.filter(arr, callback) accepts an array and a callback.  It returns a new array with only the elements that meet the conditions of the callback.

utils.reduce(arr, callback, initial) accepts an array, a callback and an initial value.  It returns a single value, based on the initial values and the callback.

## Big O
This module is O(n) as each method contains one loop.
