// import the function sum from the app.js file
// const { sum } = require('./app.js');

// start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });
//import the function from app.js
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js')
test("One euro should be 1.206 dollars", function(){

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58 Yan", function(){
    
    // use the function like its suppoed to be used
    const yan = fromDollarToYen(3.5)

    const expected = 3.5 * 1/1.2 * 127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yan);
})

test("One Yan should be 0.006 Pound", function(){
    
    // use the function like its suppoed to be used
    const pound = fromYanToPound(3.5)

    const expected = 3.5 * 1/127.9 * 0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
})