const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);

const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
let answerTxt = document.querySelector('#js-answer-text');

let answer = ''

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
   
    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        answer = json['answer'];
        answerTxt.textContent = '';
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

function displayAnswer() {
    answerTxt.textContent = answer;
}

getQuote();
