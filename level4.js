let question1 = {
    question: "Ideal Weekend Vibe?",
    optionA:"🏖️ Chill at home with movies/series",
    optionB:"🌄 Go out for adventure or exploring",
    optionC: "🍽️ Try new cafes/restaurants",
    optionD: "🎮 Gaming or hobbies time"
};

let question2 = {
    question: "What Attracts You Most in Someone?",
    optionA:"💬 Good communication",
    optionB:"😂 Sense of humor",
    optionC: "💖 Kindness & empathy",
    optionD: "🎯 Ambition & goals"
};

let question3 = {
    question: "Your Love Language?",
    optionA:"🫶 Quality time",
    optionB:"🎁 Thoughtful gifts",
    optionC: "🗣️ Words of affirmation",
    optionD: "🤗 Physical affection"
};

let question4 = {
    question: "4. How Do You Handle Stress?",
    optionA:"🎧 Music / alone time",
    optionB:"🏃 Exercise / activity",
    optionC: "🗨️ Talk it out with someone",
    optionD: "😴 Sleep it off"
};

let question5 = {
    question: "Pick Your Dating Style",
    optionA:"💕 Slow and meaningful",
    optionB:"🔥 Fun and spontaneous",
    optionC: "🧠 Deep conversations",
    optionD: "😄 Light and playful"
};

let questionList= [question1, question2, question3, question4, question5];


document.addEventListener("DOMContentLoaded" , ()=>{

    let questioncounter=0;
    function updateUi(){
        document.getElementById("Q").innerHTML= questionList[questioncounter].question;
        document.getElementById("A").innerHTML= questionList[questioncounter].optionA;
        document.getElementById("B").innerHTML= questionList[questioncounter].optionB;
        document.getElementById("C").innerHTML= questionList[questioncounter].optionC;
        document.getElementById("D").innerHTML= questionList[questioncounter].optionD;
    }

    updateUi();

});