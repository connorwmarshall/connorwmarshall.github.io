const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);
const imageBtn = document.querySelector('#js-image-button'). addEventListener('click', getImage);

const url = "https://api.quotable.io/random";

async function getQuote() {
        fetch(url)
       .then(function(data) {
              return data.json();
         })
         .then(function(data){    
         document.getElementById("js-quote-text").innerHTML = data.content; document.querySelector(".author");
        })
      .catch(function(err) {
         console.log(err); 
         });
      }

let clientID = "Gp0Vc3S5Xd6q-8NMt9HJmHOe3AoizBU7-G-Q9yP0W7Y"
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");

function getImage() {
    fetch(endpoint)
        .then((response) => response.json())
        .then((jsonData) => {
            imageElement.src = jsonData.urls.regular;
            imageLink.setAttribute("href", jsonData.links.html);

        })
        .catch((error) => {
            console.log("Error: " + error);

    });

}