'use strict';

const Ktree = require('./kary-tree');
//function to return array of values of nodes without children
module.exports = function (root) {
  //empty array for answers
  let total = 0; //set up accumulator

  if (!root || !root.root) return ('Error - invalid input - no tree!');

  //call traversal method
  root.breadthFirst(node => {

    console.log('node', node.val.val);
    total = total + node.val.val;
    console.log('total', total);
  });

  return total;
};
