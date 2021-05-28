const numbers = [
  41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24,
];

// O(n^2)
const mostDuplicates = (arr) => {
  let mostValue;
  let mostCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
  }
  return `${mostValue} appeared ${mostCount} times.`;
};

// const testArray = [1,2,3,2,1]
// O(2n)
const optimizedDuplicates = (arr) => {
  const map = {};

  // option shift a
  /* 
map[value] is map at key of 1
map = {
  1: 2
  2: 2
  3: 1
  
}


 */
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (map[value] === undefined) {
      map[value] = 1;
    } else {
      map[value]++;
    }
  }

  let mostValue;
  let mostCount = 0;

  // for..in, loops through obj
  for (const key in map) {
    // map at key 1 is 2
    // map at key equals that key's value
    if (map[key] >= mostCount) {
      mostCount = map[key];
      mostValue = key;
    }
  }

  return `${mostValue} appeared ${mostCount} times.`;
};

console.log(optimizedDuplicates([1,2,3,2,1]));

module.exports = { mostDuplicates, optimizedDuplicates };
