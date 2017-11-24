import chai ,{ assert } from "chai";

describe("Filter numbers:", () => {
    it("should return: Enter at least 3 array index values, if array.length < 2", () => {
        let input = filterNUm([2,3]);
        assert.equal(input, "Enter at least 3 array index values", `Array length > 2`);
     });
  
     it("should return 0 if array is empty", () => {
      let input = filterNum([]);
      assert.equal(input, 0);
     });
  
     it("should return 'Not an array'", () => {
        let input = filterNum("arandomstring");
        assert.isNotArray(input, "Not an array");
     });

     it("should return 'Array values must be an integer'", () => {
        let input =  filterNum([1.1, 2.6, 9.0]);
        assert.isNotOk(input, "Array values must be non negative integers");
     });

     it("should return 'Array values must be an integer'", () => {
        let input =  filterNum([-1, -2, -9]);
        assert.isNotOk(input, "Array values must be non negative integers");
     });
  });