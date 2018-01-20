'use strict';

const solution = require('../lib/solution.js');
require ('jest');

describe('Solution Module', function() {

  let single =
    {value: 7,
      next: null};

  let singleAns =
      {value: 7,
        next: null};

  let odd =
      {value: 1,
        next:{value: 2,
          next:{value: 3,
            next:{value: 4,
              next:{value: 5,
                next: null},
            },
          },
        },
      };

  let oddAns =
      {value: 3,
        next:{value: 4,
          next:{value: 5,
            next: null},
        },
      };

  let even =
    {value: 8,
      next:{ value: 6,
        next:{value: 4,
          next:{value: 2,
            next: null},
        },
      },
    };

  let evenAns =
    {value: 6,
      next:{value: 4,
        next:{value: 2,
          next: null},
      },
    };

  it('should check for input', function() {
    expect(solution()).toBe(null);
  });

  it('should return the first node if there is only one node', function() {
    expect(solution(single)).toEqual(singleAns);
  });

  it('should return the correct answer with an even number of modes', function() {
    expect(solution(even)).toEqual(evenAns);
  });

  it('should return the correct answer with an odd number of modes', function() {
    expect(solution(odd)).toEqual(oddAns);
  });
});
