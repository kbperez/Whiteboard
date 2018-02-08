'use strict';

const Ktree = require('./kary-tree');
const SLL = require('./SLL');
//function to return array of values of nodes without children
module.exports = function (tree) {

  let answer = new SLL; //set up new linked list for hold answer
  let array = []; //set up array to hold values for sorting

  //Input validation
  if (!tree || !tree.root) return ('Error - invalid input - no tree!');
  // && typeof tree.root.children === 'number'
  //check if it's a tree of just a root
  if (tree.root.children.length === 0) {

    answer.insertEnd(tree.root.val);
    return answer;
  }

  //call traversal method
  tree.breadthFirst(node => {
    console.log('traversal', node.val.val);
    array.push(node.val.val);
    console.log('array', array);
  });

  array.sort((a,b) => a-b);

  for (let i = 0; i < array.length ; i++) {
    answer.insertEnd(array[i]);
  }

  return answer;
};
