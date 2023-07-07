let num1 = digitEl

// let num2 = digitEl2



document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// document.getElementById("add-el").textContent = addition;

let sumEl = document.getElementById("sum-el")


function add(){
    let result = num1 + num2;
    sumEl.textContent = "= " + result;
}

function subtract(){
    let result = num1 - num2;
    sumEl.textContent = "= " + result;
}

function divide(){
    let result = num1 / num2;
    sumEl.textContent = "= " + result;
}

function multiply(){
    let result = num1 * num2;
    sumEl.textContent = "= " + result;
}

// making the digits function

document.getElementById("digit-el").textContent = digitEl;
// let digitEl2= document.getElementById("digit-el2")
function number(){
    console.log("clicked");
    let digitEl = num1;
    // digitEl.textContent= digitEl;

    // let content2 = num1;
    // digitEl2.textContent= content2;
}