const filterNum = (input) => {
    const evenNum = [];
    const oddNum = [];
    
    if (!input) {
      return 'Please supply an input';
    }
  
    if (typeof input === 'string') {
      return 'Input must be an array';
    }
  
    if (typeof input === 'number') {
      return 'Input must be an array of numbers';
    }
  
    if (!Array.isArray(input)) {
      return 'Not an array';
    }
  
    if (input.length <= 1) {
      return 'Enter at 3 array values';
    }
  
    for (let num of input) {
      if (num < 1) {
        return 'Array values must be non-negative integers';
      }
      if (Number(num) === num) {
        return 'Array values must be integers';
      }
      if ((num % 2) === 0 ) {
        evenNum.push(num);
      }
      else {
        oddNum.push(num);
      }
    }
    return {
      evenNum, 
      oddNum
    }
  
  };
  
export default filterNum;