'use strict';
// const TreeNode = require('./tree-node');
const BinaryTree = require('./binary-tree');

const solution = module.exports = function(tree1, tree2) {
  if (!tree1 || !tree2) return'Invalid input';
  if (!tree1.hasOwnProperty('root') || tree1.hasOwnProperty('left') || tree1.hasOwnProperty('right')) return 'Invalid structure';
  if (!tree2.hasOwnProperty('root') || tree2.hasOwnProperty('left') || tree2.hasOwnProperty('right')) return 'Invalid structure';

  let TreeStructure1 = tree1.inOrderTraversal();
  let TreeStructure2 = tree2.inOrderTraversal();

  if (TreeStructure1.toString() === TreeStructure2.toString()) {
    return true;
  }

  return false;
};
