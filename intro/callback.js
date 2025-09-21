// hello();
// bye();



// function hello (){
//     console.log('Hello');
    
// }


// function bye (){
//     setTimeout(() => {
//         console.log('Bye');
//     }, 2000);
// }
greet(samuel);
question(mood);

function greet(callback){
    console.log('Hey what is your name');
    callback();
}
 

function samuel(){
setTimeout(() => {
    console.log('my name is Samuel');},
2000);
}

function question(para){
    console.log('How are you?');
    para();
}

function mood(){
    setTimeout(() => {
    console.log('I am good, thank you!');
        
    }, 3000);
}