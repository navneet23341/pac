let question1 = {
    question: "",
    optionA:"",
    optionB:"",
    optionC: "",
    optionD: ""
};

let question2 = {
    question: "",
    optionA:"",
    optionB:"",
    optionC: "",
    optionD: ""
};

let question3 = {
    question: "",
    optionA:"",
    optionB:"",
    optionC: "",
    optionD: ""
};

let question4 = {
    question: "",
    optionA:"",
    optionB:"",
    optionC: "",
    optionD: ""
};

let question5 = {
    question: "",
    optionA:"",
    optionB:"",
    optionC: "",
    optionD: ""
};

let questionList= [question1, question2, question3, question4, question5];

function updateUi(){
    document.getElementById("Q").innerHTML= questionList[questioncounter].question;
    document.getElementById("A").innerHTML= questionList[questioncounter].optionA;
    document.getElementById("B").innerHTML= questionList[questioncounter].optionB;
    document.getElementById("C").innerHTML= questionList[questioncounter].optionC;
    document,getElementById("D").innerHTML= questionList[questioncounter].optionD;
}

document.addEventListener("DOMContentLoaded" , ()=>{


});