'use strict';
const solution = require('./lib/solution');
const TreeNode = require('./lib/tree-node');
const BinaryTree = require('./lib/binary-tree');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);
let ten = new TreeNode(10);

let binaryTree = new BinaryTree();
binaryTree.root = one;
one.left = two;
one.right = three;
two.left = four;

let sameTree = new BinaryTree();
sameTree.root = five;
five.left = six;
five.right = seven;
six.left = eight;


let differentTree = new BinaryTree();
differentTree.root = ten;
ten.right = eight;

let noTree = new BinaryTree();
noTree.root = nine;

console.log(binaryTree);
console.log(sameTree);
console.log(differentTree);
console.log(noTree);
console.log(solution(binaryTree, sameTree));
console.log(solution(binaryTree, differentTree));
console.log(solution(sameTree, noTree));
