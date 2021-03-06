const numbers = [
    54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2,
  ];
  const bubbleSort = (arr) => {
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
  
      for (let i = 0; i < arr.length - 1; i++) {
        // compare arr[i] to arr[i+1]
        if (arr[i] > arr[i + 1]) {
          // swap places if needed
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
                // if swapped, set sorted = false to run while loop again
                sorted = false;
        }
      }
    }

    return arr;
  };
  const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    // use first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    // start at index 1 to ignore pivot
    for (let i = 1; i < arr.length; i++) {
      // push into different arrays based on value compared to pivot
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
  
    // merge arrays and pivot together
    return quickSort(left).concat(pivot, quickSort(right));
  };
  
  // export along with bubble sort
  module.exports = { bubbleSort, quickSort };