let numbers = [4,7,6,8,9]

var cars = ['BMW', 'BENZ', 'BENTLEY', 'PORSCHE']

//ARRAY METHODS

// .push() adds items

cars.push('TOYOTA', 'HYUNDAI')


// .pop()  removes last item

cars.pop()

// .shift() removes items at the beginning

cars.shift()

// .length returns length of an array

// console.log(cars.length)



// .unshift() adds an item at the beginning

cars.unshift('Beetle')

// .includes() checksthe array for a value or item

// console.log(cars.includes('BMW'));


// .indexof() gets the index of a value

// console.log(numbers.indexOf(8));
// console.log(cars.indexOf('HYUNDAI'));


// .splice(start, deleteCount, items)

// console.log(cars)

// cars.splice(1, 2, 'GENESIS')

// console.log(cars);


// .slice(start, end)

let sliced = numbers.slice(3,5)

// console.log(numbers)
// console.log(sliced);

// .map() used to transform an array

let foods = ['sharwarma' ,'beans', 'garri', 'akara', 'afang']

let foodLength = foods.map(foods => foods.length)

// console.log(foodLength);

let num = [2,3,4,5,6,7,8]

let nums = num.map(num => num * num)

// console.log(nums);




// .filter() removes items that do not meet condition specified

let foodsLength = foods.filter(foods => foods.length > 5)

let numLength = num.filter(num => num <= 6)
// console.log(foodsLength);
// console.log(numLength);



// .reduce()








