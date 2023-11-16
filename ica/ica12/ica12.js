const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);

const answerBtn = document.querySelector('#js-tweet'). addEventListener('click', testFunction);

let answer = ""

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

function testFunction() {
    console.log("You clicked the answer button. Good job.");
}

async function getQuote() {
   
    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question; 
}

async function getAnswer() {
    try {
        const json = await response.json();
        displayAnswer(json['answer']);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch answer');
    }
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer; 
}

getQuote();
