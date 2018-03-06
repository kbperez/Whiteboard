'use strict';
const SLL = require('./sll');

const solution = module.exports = function(tree1) {
  //validate input
  if (!tree1) return'Invalid input';
  if (!tree1.hasOwnProperty('root') || tree1.hasOwnProperty('left') || tree1.hasOwnProperty('right')) return 'Invalid structure';
  //traverse the tree and push values to array
  let treeValues = tree1.inOrderTraversal();
  //sort array
  treeValues.sort(function(a, b) {
    return a - b;
  });

  //create linked list
  let list = new SLL;
  //insert values in linked list at end
  for (let i=0; i<treeValues.length; i++) {
    list.insertEnd(treeValues[i]);
  }

  return list;
};
