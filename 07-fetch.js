console.log("script is working!");

const h1Element = document.createElement("h1");

h1Element.innerText = "HELLOOOO";
document.body.appendChild(h1Element);

fetch("https://rickandmortyapi.com/api/character?page=3") // by default is doing a GET request
  .then((response) => response.json()) // the fetch doesn't return the JSON directly. We need this step, and it's also a promise
  .then((jsonData) => {
    jsonData.results.forEach((eachCharacter) => {
      const h1Name = document.createElement("h1");
      h1Name.innerText = eachCharacter.name;
      document.body.appendChild(h1Name);
      
      const charImage = document.createElement("img");
      charImage.src = eachCharacter.image;
      document.body.appendChild(charImage);
    });
  })
  .catch((err) => console.error(err));
