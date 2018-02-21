'use strict';

module.exports =  function (matrix) {
  if (!matrix) return null;
  if (!Array.isArray(matrix)) return 'Input must be an array';
  //create empty array to hold manipulated elements
  let temp = [];
  //determine size of incoming matrix
  let rows = matrix.length;
  let columns = matrix[0].length;

  for(let i=0; i<columns; i++) {
    temp.push([]);
  }

  //push into new array after performing callback
  for(let i=0; i<rows; i++) {
    for(let j=0; j<columns; j++) {
      temp[j].push(matrix[i][j]);
      // console.log('temp', temp);
    }
  }
  matrix = temp;
  //return original array in rotated form
  return matrix;
};
