function checkAnswer() {

    const correctAnswer =4;

    let userAnswer = document.querySelector("input[name='quiz']:checked").value 
    // The above line is what I learnerd in this task
    if(userAnswer === correctAnswer){
        document.getElementById("feedback").textContent = "Correct! Well done.";
    }
    else{
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"
    }

}


document.getElementById("submit-answer").addEventListener('click',checkAnswer);