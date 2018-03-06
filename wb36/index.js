'use strict';
const BinaryTree = require('./lib/binary-tree');

let solution = module.exports = {};


solution.testStructure = function(tree1, tree2) {
  if (!tree1 || !tree2) return new Error('type error: please input binary trees as two arguments to compare.');
  if (!tree1.hasOwnProperty('root') || tree1.hasOwnProperty('left') || tree1.hasOwnProperty('right')) return new Error('type error: invalid tree structure on argument 1');
  if (!tree2.hasOwnProperty('root') || tree2.hasOwnProperty('left') || tree2.hasOwnProperty('right')) return new Error('type error: invalid tree structure on argument 2');

  let TreeStructure1 = tree1.inOrderTraversal();
  let TreeStructure2 = tree2.inOrderTraversal();

  if (TreeStructure1.toString() === TreeStructure2.toString()) {
    return true;
  }

  return false;
};

let one = new BinaryTree.TreeNode(1);
let two = new BinaryTree.TreeNode(2);
let three = new BinaryTree.TreeNode(3);
let four = new BinaryTree.TreeNode(4);
let five = new BinaryTree.TreeNode(5);
let six = new BinaryTree.TreeNode(6);
let seven = new BinaryTree.TreeNode(7);
let eight = new BinaryTree.TreeNode(8);
let nine = new BinaryTree.TreeNode(9);

let binaryTree = new BinaryTree.BinaryTree();
binaryTree.root = one;
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

let sameTree = new BinaryTree.BinaryTree();
sameTree.root = one;
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

let differentTree = new BinaryTree.BinaryTree();
differentTree.root = two;
two.right = one;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.left = seven;
seven.left = eight;
seven.right = nine;

let uno = new BinaryTree.TreeNode(1);
let noTree = new BinaryTree.BinaryTree();
noTree.root = uno;

console.log(solution.testStructure(binaryTree, sameTree));
// console.log(solution.testStructure(binaryTree, differentTree));
console.log(solution.testStructure(binaryTree, noTree));
