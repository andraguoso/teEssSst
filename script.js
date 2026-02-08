const questions = [
    {
        text: "do you think pineapple goes well with pizza?",
        answer: ""
    },
    {
        text: "is sleeping early an habit of yours?",
        answer: ""
    },
    {
        text: "what do you do when you're bored?",
        answer: ""
    } // add up to ten questions
]

/*START OF SHOW-HIDE*/

function show_div(div) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("test").classList.add("hidden");
    document.getElementById("finish").classList.add("hidden");

    document.getElementById(div).classList.remove('hidden');
}

const start = document.getElementById("start");
start.addEventListener("click", function() {
    show_div('test');
});

const sumbit = document.getElementById("sumbit");
sumbit.addEventListener("click", function(){
    show_div('finish');
});

const head_back = document.getElementById("back");
head_back.addEventListener("click", function(){
    show_div('home');
});
/*END OF SHOW-HIDE*/

let index = 0; let love = 0;
const next = document.getElementById("next");
next.addEventListener("click", function(){
    document.getElementById("question") = questions[index].text;
    const answer_text = document.getElementById("answer-place");
    questions[index].answer = answer_text.value;
    if(questions[index].answer.length >= 100) {
        love++;
    }
});

const cat_reaction = [
    "ur approved. nice answers! totally unrelated do you want ot be my friend?",
    "AWESOME RESPNSES outstanding job. passed with A++!!"    
]
if (love >=6) {
    // state that the cat likes you a lot
    document.getElementById("show-love") = cat_reaction[0];
}
else {
    document.getElementById("show-love") = cat_reaction[1];
}