'use strict';

const Ktree = require('./kary-tree');
//function to return array of values of nodes without children
module.exports = function (root) {
  //empty array for answers
  let answer = [];

  if (!root || !root.root) return ('Error - invalid input - no tree!');

  //call traversal method
  root.breadthFirst(node => {

    if (!node.val.children.length) answer.push(node.val.val);


  });
  return answer;
};
