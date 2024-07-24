const inputBox = document.getElementById("inputBox");
const answer = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const pageText = document.getElementById("pageText");

submitBtn.addEventListener('click', ()=> {
    if(inputBox.value.toLowerCase() === "nectar") {
        pageText.style.display = "inherit";
        console.log("First if statement works");
    }
    else if(inputBox.value.toLowerCase() === "pontia sisymbrii") {
        location.href="lepidopterarium1.html";
    }
    else {
        console.log("incorrect");
        console.log(inputBox.value);
        answer.style.display = "inherit";
    }
});