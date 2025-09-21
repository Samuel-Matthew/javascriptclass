

const text = document.getElementById('change');

const btn = document.getElementById('btn');

const car = document.getElementById('car');

btn.addEventListener('click', function() {
    text.innerHTML =  "Magic";
    text.style.color = "pink";
    text.style.fontSize = "20px";
    text.style.backgroundColor = "black";
    text.style.textAlign = "center";
})


btn.addEventListener('click', function() {
    car.src = "keke.jpg";
    car.remove();
})



// btn.addEventListener('click', function() {
//     car.remove();
// })


// btn.addEventListener('mouseover', function() {
//     btn.innerHTML =  "Double Magic";
// })


// btn.addEventListener('', function() {
//     btn.innerHTML =  "Click Me";
// })