

const text = document.getElementById('change');

const btn = document.getElementById('btn');

const car = document.getElementById('car');
const remove = document.getElementById('remove-btn');
const eventBtn = document.getElementById('event-btn');

const box = document.getElementById('box');
const clsoe = document.getElementById('close');


box.addEventListener('click', function() {
        box.remove();
})

btn.addEventListener('click', function() {
    text.innerHTML =  "Magic";
    text.style.color = "pink";
    text.style.fontSize = "20px";
    text.style.backgroundColor = "black";
    text.style.textAlign = "center";
})


btn.addEventListener('click', function() {
    car.src = "keke.jpg";
})

remove.addEventListener('click', function() {
    car.remove();
})

eventBtn.addEventListener('click', function(){
    alert("You have clicked the button");
})


// btn.addEventListener('mouseover', function() {
//     btn.innerHTML =  "Double Magic";
// })


// btn.addEventListener('', function() {
//     btn.innerHTML =  "Click Me";
// })


