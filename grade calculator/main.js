const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener("click", checkGrade);

function checkGrade(){
    const testScore = Number(document.getElementById("testScore").value);
    const examScore = Number(document.getElementById("examScore").value);


    const results = document.getElementById('results')

     if (!testScore && !examScore) {
        results.innerHTML = `Pls Enter Scores`;
        return;
    }

    const total = testScore + examScore;

    if (total >= 0 && total <= 39) {
        results.innerHTML = ` <p>Your Grade is F`;
    } else if(total >= 40 && total <= 45) {
        results.innerHTML = `<p>Your Grade is E</p>`
    }
    else if(total >= 46 && total <= 49){
        results.innerHTML = `Your Grade is D`;
    }
    else if(total >= 50 && total <= 59){
        results.innerHTML =  `Your Grade is C`
    }
    else if(total >= 60 && total <= 69){
        results.innerHTML =  `Your Grade is B`
    }
    else if(total >= 70 && total <= 100){
        results.innerHTML =  `Your Grade is A`
    }else if(total > 100){
        results.innerHTML = `total greater than 100`
    }
    else{
        results.innerHTML = `Enter a valid number`
    }
}