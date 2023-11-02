
//creates a variable that corresponds with elements in our html
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


//function that picks a random number from the length of given array
//then uses that index to pick an item from the array 
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//store of variables and arrays 
var storyText = "It was 94 fahrenheit outside, but :insertx: really needed to make his way to :inserty:. However, when :insertx: arrived at :inserty: he stood in awe and :insertz:. Bob saw the whole thing and cried a little bit. Only a little bit. As a side note, :insertx: weighs 300 pounds, but he's working on it. Leave him alone.";
var insertX = ["Connor, a scared HTML student,","your cousin, Mason,", "Phil Collins"];
var insertY = ["a deep well", "Minnesota", "the Bubba Gump Shrimp restaurant"];
var insertZ = ["broke out into song and dance", "was comforted by the warm, gentle hug of the sun", "could feel it calling in the air tonight"];

//adding a button that triggers on click 
randomize.addEventListener('click', result);

//what happens when button is clicked 
function result() {
    var newStory = storyText; 

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replaceAll(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);

    if(customName.value !== '') {
    const name = customName.value;

    newStory = newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32)*5/9)} centigrade`;

    newStory = newStory.replace("300 pounds",weight);
    newStory = newStory.replace("94 fahrenheit",temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}