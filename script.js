const inputBox = document.getElementById("inputBox");
const answer = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', ()=> {
    if(inputBox.value === "hello there") {
        answer.style.display = "inherit";
    }
    else {
        console.log("incorrect");
        console.log(inputBox.value);
    }
});