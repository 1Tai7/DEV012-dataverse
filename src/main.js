import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

function addElement() {
  const img = document.createElement("img");
  const ul = document.querySelector("ul");
  const item = document.createElement("li");
  let algo = "";
  for (let index = 0; index < data.length; index++) {
    ul.innerHTML += `<li itemscope class= "card"><img src="${data[index].URL}" width= "100px" alt=""> <p>${data[index].name}</p></li> `;
  }
}
addElement();
const select = document.querySelector('[data-testid="select-filter"]');
let filterForSpecies = "";
select.addEventListener("change", function () {
  let selectOption = this.options[select.selectedIndex];
  filterForSpecies = selectOption.value;
  console.log(selectOption.value);
});
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const fascendente = data.filter(
    (character) => character.facts.species === filterForSpecies
  ); const fdescendente = data.filter(
    (character) => character.facts.species === filterForSpecies
  );

  console.log(filterSpecies);
});

console.log(example, renderItems(data), data);
