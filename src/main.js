import {
  filterSpecies,
  filterAffiliation,
  computeStats,
  sortData,
} from "./dataFunctions.js";
import { renderCharacter, clearCharacter } from "./view.js";
import data from "./data/dataset.js";
renderCharacter(data);

const selectSpecies = document.querySelector('[name="species"]');
let filterForSpecies = "";
selectSpecies.addEventListener("change", function (event) {
  filterForSpecies = event.target.value;
});
const selectAffiliation = document.querySelector('[name="affiliation"]');
let filterForAffiliation = "";
selectAffiliation.addEventListener("change", function (event) {
  filterForAffiliation = event.target.value;
});
const selectSort = document.querySelector('[name="sortBy"]');
let sortBy = "";
selectSort.addEventListener("change", function (event) {
  sortBy = event.target.value;
});

const buttonClear = document.querySelector(
  'button[data-testid="button-clear"]'
);
buttonClear.addEventListener("click", function () {
  clearCharacter();
  renderCharacter(data);
  selectSpecies.selectedIndex = 0;
  selectAffiliation.selectedIndex = 0;
  selectSort.selectedIndex = 0;
});
const button = document.querySelector("button");
button.addEventListener("click", function () {
  clearCharacter();
  const speciesFiltradas = filterSpecies(data, filterForSpecies);
  renderCharacter(speciesFiltradas);
 // computeStats(speciesFiltradas, filterForSpecies);

  const afiliacionFiltradas = filterAffiliation(data, filterForAffiliation);
  renderCharacter(afiliacionFiltradas);
  const sortedData = sortData(data, sortBy);
  renderCharacter(sortedData);
});

const amount = computeStats(data, speciesToFilter);
const stats = document.getElementById("stats");
stats.innerHTML = "Resultados de tu selección: " + data.length;
