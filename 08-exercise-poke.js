fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((jsonData) => {
    // we have the data and we are going to display each pokemon name
    // but we need to make another request to get the image of each pokemon
    jsonData.results.forEach((eachPokemon) => {
      fetch(eachPokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          const pokeCardElement = document.createElement("div");
          pokeCardElement.classList.add("poke-card");

          const h1Name = document.createElement("h1");
          h1Name.innerText = pokemonData.name;
          pokeCardElement.appendChild(h1Name);

          const charImage = document.createElement("img");
          charImage.src =
            pokemonData.sprites.other["official-artwork"].front_default;
          pokeCardElement.appendChild(charImage);

          document.body.appendChild(pokeCardElement);
        });
    });
  })
  .catch((err) => console.error(err));
