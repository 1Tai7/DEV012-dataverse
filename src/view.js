export const renderCharacter = (data) => {
  const ul = document.querySelector("ul");
  ul.classList.add("character");
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += 
  `<li itemscope itemtype= "card" class="cards">
    <img src="${data[i].URL}" alt="img">
    <div class="textCard">
     <span><dt>Nombre: </dt><dd itemprop = "name">${data[i].name}</dd></span>
      <span><dt>Descriptción: </dt><dd itemprop = "shortDescription">${data[i].shortDescription}</dd></span>
      <span><dt>Especie: </dt><dd itemprop = "specie">${data[i].facts.species}</dd></span>
      <span><dt>Afiliación: </dt><dd itemprop = "affiliation">${data[i].facts.affiliation}</dd></span>
      <span><dt>Estatura: </dt><dd itemprop = "height">${data[i].facts.Height} m</dd></span>
      <span><dt>Edad: </dt><dd itemprop = "age">${data[i].facts.Age}</dd></span>
    </div>
  </li> `;
  }
};

export const clearCharacter = () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
};
