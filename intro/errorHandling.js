// ERROR HANDLING

// try catch

try{
    let results = y/5
    // console.log(results);
}
catch(error){
    // console.log("Wrong input");
}

try {
    // Code that may throw an error
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // Handle the error
    // console.error("An error occurred:", error.message);
}


// throw method

const divNum = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}

// console.log(divNum(5, 0)); // 5

// try catch finally

try{
    let resultz = r/5
    console.log(resultz);
}
catch(error){
    console.log("Wrong input");
}
finally {
    console.log("This will always run");
}