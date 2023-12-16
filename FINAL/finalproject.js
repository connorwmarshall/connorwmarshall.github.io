console.log("JS LINKED"); 

const timerDisplay = document.querySelector("#timerDisplay");
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const resetButton = document.querySelector("#resetButton");
const submitButton = document.querySelector("#submitButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let stopped = true; 
let intervalId; 
let seconds = 0; 

startButton.addEventListener('click', () => {
    if(stopped){
        stopped = false; 
        startTime = Date.now() - elapsedTime; 
        intervalId = setInterval(updateTimer, 75);

    }
});
stopButton.addEventListener('click', () => {
    if(!stopped){
        stopped = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

resetButton.addEventListener('click', () => {
    if(!stopped){
        stopped = true};
    elapsedTime = 0;
    clearInterval(intervalId); 
    timerDisplay.textContent = `0`;

});

submitButton.addEventListener('click', () => {
    if(!stopped){
        stopped = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);

        phoneNumber.textContent = `${seconds}`;
    }
});

function updateTimer(){
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor(elapsedTime / 1000);

    //seconds = extraZeros(seconds);

    timerDisplay.textContent = `${seconds}`; 

    //function extraZeros(unit){
        //return(("000000000") + unit).length > 10 ? unit : "000000000" + unit;
    }


