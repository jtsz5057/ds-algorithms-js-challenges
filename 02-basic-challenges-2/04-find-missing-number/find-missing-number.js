function findMissingNumber(arr) {
    if (!arr || arr.length === 0) {
        return undefined;
      }
    
      const n = arr.length + 1;
      const expectedSum = (n * (n + 1)) / 2;
    
      let actualSum = 0;
      for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
      }
    
      return expectedSum - actualSum;
    }
    
    // Using reduce
    function findMissingNumber(arr) {
      if (!arr || arr.length === 0) {
        return undefined;
      }
    
      const n = arr.length + 1;
      const expectedSum = (n * (n + 1)) / 2;
    
      const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
      return expectedSum - actualSum;
}

module.exports = findMissingNumber;
