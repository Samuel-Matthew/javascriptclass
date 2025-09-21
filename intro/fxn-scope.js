// setTimeout(() => {
//     console.log('node is running');
// }, 1000);

// function mondayClass() {
//     if(true){
//         var x = 10;
//         let y = 20;
//     }
//     console.log(x); // 10
// }

// mondayClass();

function outside( ){
    let numbers = 0
    return function inside(){
        numbers ++;
        return numbers;
    }
}

const reading = outside();
console.log(reading()); // 1