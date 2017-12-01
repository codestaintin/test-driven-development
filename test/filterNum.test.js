import chai ,{ assert } from "chai";
import filterNum from '../src/filterNum';

describe("Filter numbers:", () => {
    it("should return: Enter at least 3 array index values, if array.length <= 2", () => {
        let input = filterNum([2]);
        assert.equal(input, "Enter at 3 array values");
     });
  
     it("should return \'Enter at 3 array values\' if array is empty", () => {
      let input = filterNum([]);
      assert.equal(input, "Enter at 3 array values");
     });
  
     it("should return 'Not an array'", () => {
        let input = filterNum("arandomstring");
        assert.isNotArray(input, "Not an array");
     });

     it("should return 'Array values must be an integer'", () => {
        let input =  filterNum([1.1, 2.6, 9.0]);
        assert.equal(input, "Array values must be integers");
     });

     it("should return 'Array values must be a non-negative integer'", () => {
        let input =  filterNum([-1, -2, -9]);
        assert.equal(input, "Array values must be non-negative integers");
     });
  });