'use strict';

class BinaryTree {
  constructor(root=null){
    this.root = root;
  }

  // single traversal method required for checking path

  inOrderTraversal(){
    if(!this.root)
      return null;
    return this._inOrderTraversal(this.root, []);
  }

  _inOrderTraversal(root, resultArr){
    // this is a base case
    if(root === null)
      return null;

    let result = resultArr;
    // visit left
    this._inOrderTraversal(root.left, result);

    // push root current node being inspected to the path list
    result.push(root.value);
    // visit right
    this._inOrderTraversal(root.right, result);

    return result;
  }
}

module.exports = BinaryTree
