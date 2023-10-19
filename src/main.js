import { filterSpecies, filterAffiliation } from "./dataFunctions.js";
import { renderCharacter, clearCharacter } from "./view.js";

import data from "./data/dataset.js";
renderCharacter(data);

const selectSpecies = document.querySelector('[name="species"]');
let filterForSpecies = "";
selectSpecies.addEventListener("change", function (event) {
  console.log(event.target.value);
  filterForSpecies = event.target.value;
});
const selectAffiliation = document.querySelector('[name="affiliation"]');
let filterForAffiliation = "";
selectAffiliation.addEventListener("change", function (event) {
  console.log(event.target.value);
  filterForAffiliation = event.target.value;
});
const button = document.querySelector("button");
button.addEventListener("click", function () {
  clearCharacter();
  const speciesFiltradas = filterSpecies(data, filterForSpecies);
  renderCharacter(speciesFiltradas);
  console.log(speciesFiltradas);
  const afiliacionFiltradas = filterAffiliation(data, filterForAffiliation);
  renderCharacter(afiliacionFiltradas);
});
