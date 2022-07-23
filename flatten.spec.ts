describe('flatten array', () => {
  /**
   * @TODO:
   *  - pass the tests
   *  - everything can be changed besides the tests and with it the calls to the function in the tests
   */

  
 const result = []; 

  function flatten(arr: any[], result = []) {
    
    for (const arrFlat of arr) {
        if(Array.isArray(arrFlat)) {  
          flatten(arrFlat, result);
        } else {
          result.push(arrFlat);
        }
    }
    // @TODO: Add code here.
    return result;
  }

  it('should flatten arrays', () => {
    expect(flatten([1, 2, [3]])).toEqual([1, 2, 3]);
  });

  it('should flatten more complicated arrays', () => {
    expect(flatten([1, 2, 3, [4, 5, [6, 7]], 8, [[9]], [1], 0])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0,
    ]);
  });
});
