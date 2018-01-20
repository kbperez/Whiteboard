'use strict';

const solution = module.exports = {};

let middle = function(arr) {

  //check for valid input
  if (!arr || typeof arr !== 'object') return null;

  //check for single node
  if (arr.next === null) return this;

  let findMid = arr;
  let result = arr;

  let counter = 0;

  while (findMid) {
    counter = counter + 1;
    findMid = findMid.next;
  }

  let mid = Math.ceil(counter/2);

  for (let i=1; i<mid; i++) {
    result = result.next;
    console.log('result', result);
    return result;
  }
};

// let test = {value: 1,
//   next:{value: 2,
//     next:{value: 3,
//       next:{value: 4,
//         next:{value: 5,
//           next: null},
//       },
//     },
//   },
// };
//
// middle(test);
