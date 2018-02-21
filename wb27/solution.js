
'use strict';

module.exports = function(matrix) {
  //validate input
  if (!matrix) return null;
  if (!Array.isArray(matrix)) return 'Input must be an array';
  //create empty array to hold manipulated elements
  let temp = [];
  //determine size of incoming matrix
  let rows = matrix.length;
  let columns = matrix[0].length;
  //push into new array after performing callback
  for(let i=0; i<rows; i++) {
    for(let j=0; j<columns; j++) {
      console.log('col', columns);
      console.log('row', rows);
      temp[i][j] = matrix[columns-j-1];
    }
  }
  matrix = temp;
  //return original array in rotated form
  return matrix;
};
