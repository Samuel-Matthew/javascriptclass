//NEW LECTURES WITH MR ESAINT MJAY


// A forEach in JavaScript is a built-in array method that lets you run some code for each element inside an array.

// A forEach is a method that loops through every items and run some code for each one.

// Array.forEach(function(element, index, array){
//     //code to run for each one
// })

// element → the current item in the array
// index → the position of the current item
// array → the whole array itself


// users is the array you already have (with multiple objects).
// user is just a variable name that represents each item inside the users array while map is looping through it.





// So user is not a new variable you defined somewhere else,it is just a temporary placeholder that map gives you for the current item.

let fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
    console.log(fruit)
})

// A forEach loop with index

let colours = ["Red", "Green", "Pink"];

colours.forEach((c, i) => {
    console.log(c + ": " + i)
})



// condition inside forEach

let numbers = [1, 2, 3, 4, 5];


numbers.forEach(element => {
    if (element % 2 === 0) {
        console.log(element + " is even")
    } else {
        console.log(element + " is odd")
    }
});



let scores = [45, 56, 78, 84, 95];


scores.forEach(score => {
    if (score >= 70) {
        console.log('Pass', score)
    } else {
        console.log("Fail", score)
    }
})

// MAP OF ARRAY

// A map is an array method in JavaScript that creates a new array by transforming each element of the original array.

// Take each item → do something with it → return a new item → collect all into a new array.

// let newArray = Array.map(element, index, array) {
//     return something;
// }

// Example 1: Multiply numbers

let sum = [1, 2, 3, 4];

let doubled = sum.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]



// Example 2: Extracting properties from objects 

let students =
    [
        {
            "name": "Esaint",
            "age": 100,
            "Position": "Javascript Tutor",
        },
        {
            "name": "Sifon",
            "age": 24,
            "Position": "Accountant",
        },
        {
            "name": "Shalom",
            "age": 23,
            "Position": "Social Media Manager",
        }

    ];

let details = students.map(student => student)

console.log(details)

// for each user inside users {
//     take user.name
//  }


// converting a string with array;


let words = ['javascript'];

let uppercase = words.map(word => word.toUpperCase());

console.log(uppercase);


// FILTER MAP 

const datas =
    [
        { name: "Mike", age: 25 },
        { name: "Sarah", age: 17 },
        { name: "John", age: 30 }
    ]

let adult = datas.filter(data => data.age <= 18);

console.log(adult)



// Explanation:

// users = the original array.
// user = represents each item inside users as filter loops through.
// user.age >= 18 = the condition.
// If the condition is true, the item is kept. If false, it’s skipped.

// Step by step:

// filter looks at the first item: { name: "Mike", age: 25 } → condition true → keep it.
// Next item: { name: "Sarah", age: 17 } → condition false → skip it.
// Next item: { name: "John", age: 30 } → condition true → keep it.




// REDUCE
//reduce is used when you want to take an array and combine it into a single value (sum, average, object, etc.).

let numbering = [10, 20, 30, 40];

let total = numbering.reduce((acc, num) => acc + num, 0);

console.log(total);



// Explanation:

// numbering = the array we’re reducing.
// (acc, num) => acc + num = callback function.
// acc = the accumulated value (starts at 0 because we gave it , 0 at the end).
// num = each item in the array.

// The 0 after the function is the initial value of the accumulator.

// Step by step:

// Start: acc = 0.

// Take first number: 0 + 10 = 10.
// Next number: 10 + 20 = 30.
// Next number: 30 + 30 = 60.
// Next number: 60 + 40 = 100.