export const renderCharacter = (data) => {
  const ul = document.querySelector("ul");
  ul.classList.add("character");
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li itemscope class= "card">
    <img src="${data[i].URL}"  alt="img"><div class="textCard">
    <span>${data[i].name}</span>
    <span>${data[i].shortDescription}</span>
    <span>Especie: ${data[i].facts.species}</span>
    <span>Afiliación: ${data[i].facts.affiliation}</span>
    <span>Estatura: ${data[i].facts.Height} m</span>
    <span>Edad: ${data[i].facts.Age}</span></div></li> `;
  }
};

export const clearCharacter = () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
};
