/* Declare variables below to save the different sections (divs) of your story*/
let optionOneScreen = document.querySelector(".option-one-screen");
optionOneScreen.style.display = "none";


let optionTwoScreen = document.querySelector(".option-two-screen");
optionTwoScreen.style.display = "none";


let optionOneEnd = document.querySelector(".option-one-end");
optionOneEnd.style.display = "none";


let optionTwoEnd = document.querySelector(".option-two-end");
//optionTwoEnd.style.display = "none";



let paragraph = document.querySelector("p");
let image = document.querySelector("img");

let optionTwo = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one");

optionOne.onclick=function(){
    optionOneScreen.style.display="block";
};

optionTwo.onclick=function(){
    optionTwoScreen.style.display="block";
};





/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/