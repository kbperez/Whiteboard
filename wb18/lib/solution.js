'use strict';

const Ktree = require('./kary-tree');
//function to return array of values of nodes without children
module.exports = function (tree) {

//Input validation
  if (!tree || !tree.root) return ('Error - invalid input - no tree!');

  let maxChild = tree.root; //set up variable to track node with most children
  // console.log('original maxChild', maxChild);
  // console.log('original maxChild children', maxChild.children);
  if (maxChild.children.length === 0) return ('This tree has no children');

  //call traversal method
  tree.breadthFirst(node => {

    // console.log('node val', node.val);
    // console.log('node val children length', node.val.children.length);

    if(node.val.children.length > maxChild.children.length) maxChild = node.val;

  });
  console.log('maxChild', maxChild.children.length);
  return maxChild;
};
