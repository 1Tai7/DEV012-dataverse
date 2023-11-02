import {
  filterBySpecies,
  filterByAffiliation,
  sortData,
  clearData,
  computeStats,
  ageSumatory,
} from "./dataFunctions.js";
import { renderItems, clearCharacter } from "./view.js";
import data from "./data/dataset.js";
renderItems(data);
const stats = document.getElementById("stats");
stats.innerHTML = "Resultado de tu selección: " + computeStats(data);

const sumAges = document.getElementById("sumAges");
sumAges.innerHTML = "Sumatoria de edades: " + ageSumatory(data);

const selectSpecies = document.querySelector('[name="speciesCharacter"]');
let valueSelectSpecies = "";
selectSpecies.addEventListener("change", function (event) {
  valueSelectSpecies = event.target.value;
});
const selectAffiliation = document.querySelector(
  '[name="affiliationCharacter"]'
);
let valueSelectAffiliation = "";
selectAffiliation.addEventListener("change", function (event) {
  valueSelectAffiliation = event.target.value;
});
const selectSort = document.querySelector('[name="sort-order"]');
let sortBy = "";
selectSort.addEventListener("change", function (event) {
  sortBy = event.target.value;
});

const openModal = document.querySelector(".menu");
const modal = document.querySelector(".containerFilter");
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";

  modal.classList.add("containerFilter--show");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const buttonClear = document.querySelector(
  'button[data-testid="button-clear"]'
);
buttonClear.addEventListener("click", function () {
  clearCharacter();

  renderItems(data);
  selectSpecies.selectedIndex = 0;
  selectAffiliation.selectedIndex = 0;
  selectSort.selectedIndex = 0;
  valueSelectSpecies = "";
  valueSelectAffiliation = "";
  sortBy = "";
  stats.innerHTML = "Resultado de tu selección: " + computeStats(data);
  sumAges.innerHTML = "Sumatoria de edades: " + ageSumatory(data);
});
const buttonApply = document.querySelector("#applyFilter");
buttonApply.addEventListener("click", function () {
  const filteredSpecies = filterBySpecies(data, valueSelectSpecies);
  const filteredAffiliation = filterByAffiliation(data, valueSelectAffiliation);
  const clearedData = clearData([...filteredAffiliation, ...filteredSpecies]);

  clearCharacter();
  renderItems(clearedData);

  if (sortBy) {
    let sortedData = [];
    if (valueSelectAffiliation || valueSelectSpecies) {
      sortedData = sortData(clearedData, sortBy);
    } else {
      sortedData = sortData(data, sortBy);
    }
    clearCharacter();
    renderItems(sortedData);
  }

  stats.innerHTML = "Resultado de tu selección: " + computeStats(clearedData);

  sumAges.innerHTML = "Sumatoria de edades: " + ageSumatory(clearedData);
});

//const amount = computeStats(data, speciesToFilter);
