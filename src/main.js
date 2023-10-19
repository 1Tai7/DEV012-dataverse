import data from "./data/dataset.js";
import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import { sortData } from "./dataFunctions.js";
import { computeStats } from "./dataFunctions.js";

const stats = document.getElementById("stats");
stats.innerHTML = "Resultados de tu selección: " + data.length;
  
const applyFilterButton = getElementById("applyFilter")
applyFilterButton.addEventListener("click", ()=> {
  const selectOption = select.options[select.selectedIndex];
  const buttonClear = document.querySelector('button[data-testid="button-clear"]');
  const sortBySelector = document.querySelector('select[name="sortBy"]');
  const sortBy = sortBySelector.value;
  const amountOfCharacteres = computeStats(species, affiliation);

  const sortedData = sortData(dataFiltered, sortBy);
  //falta renderItems :c

  //cod Ilce :3
  function addElement() {
    const img = document.createElement("img");
    const ul = document.querySelector("ul");
    const item = document.createElement("li");
    let algo = "";
    for (let index = 0; index < data.length; index++) {
      ul.innerHTML += `<li itemscope class= "card">
      <img src="${data[index].URL}"  alt="img"><div class="textCard">
      <span>${data[index].name}</span>
      <span>${data[index].shortDescription}</span>
      <span>Especie: ${data[index].facts.species}</span>
      <span>Afiliación: ${data[index].facts.affiliation}</span>
      <span>Estatura: ${data[index].facts.Height} m</span>
      <span>Edad: ${data[index].facts.Age}</span></div></li> `;
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
    const filterSpecies = data.filter(
      (character) => character.facts.species === filterForSpecies
    );
    console.log(filterSpecies);
  });
  
  console.log(example, renderItems(data), data);
 
});

