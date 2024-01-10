"use strict"

// Variables
const listItem = document.querySelectorAll(".hero__list--item");
const question = document.querySelectorAll(".question-container");
const answer = document.querySelectorAll(".answer-container");


// using event delegation
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", () => {
        // clicking on a question-title or plus-icon should
        // close any other opened answer and open the active div answer
        // and switch the icon to minus-icon
        for (let a = 0; a < answer.length; a++) {
            if (answer[a].classList.contains("active") && a !== i) {
                question[a].classList.remove("active");
                answer[a].classList.remove("active");
            };
        };
        // clicking on question-title or the plus-icon should display
        // the answer and switch the icon to minus-icon
        question[i].classList.toggle("active");
        answer[i].classList.toggle("active");
    });

};
