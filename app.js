// this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// just a console log for ourselves.
// console.log(sum(7,3))


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {return dollar * (1/oneEuroIs["USD"]) * oneEuroIs["JPY"];}
const fromEuroToDollar = (euro) => {return euro * oneEuroIs["USD"];}
const fromYanToPound = (Yan) => {return Yan * (1/oneEuroIs["JPY"]) * oneEuroIs["GBP"];  }

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYanToPound(1));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };