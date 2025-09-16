
// test('should first', () => { second })

// 'should first ' is the description of the test 
sum = (a, b) => a + b; // Function to be tested

test('Sum Function Should calculate the sum of two function ', () => {

    const result = sum(3, 4);

    expect(result).toBe(7); // This line is called Assertion


})