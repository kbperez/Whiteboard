'use strict'

const BinaryTree = require('../lib/binary-tree')
const solution = require('../index');
require('jest');

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

describe('Binary-tree structure', function() {
  describe('Valid output', function() {
    it('should return true for the same structure', function() {
      expect(solution.testStructure(binaryTree, sameTree).toBe(true));
    });
    it('should return false for different structure', function() {
      expect(solution.testStructure(binaryTree, differentTree).toBe(false));
    });
  })
  describe('Invalid inpjut', function() {
    it('should accept two binary tress', () => {
      expect(solution.testStructure().toEqual('Invalid input'));
      expect(solution.testStructure(differentTree, noTree).toEqual('Invalid structure'));
    })
  })
})
