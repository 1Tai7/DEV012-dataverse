import {
  filterBySpecies,
  filterByAffiliation,
  sortData,
  clearData,
} from "./dataFunctions.js";
import { renderCharacter, clearCharacter } from "./view.js";
import data from "./data/dataset.js";
renderCharacter(data);

const selectSpecies = document.querySelector('[name="species"]');
let valueSelectSpecies = "";
selectSpecies.addEventListener("change", function (event) {
  valueSelectSpecies = event.target.value;
});
const selectAffiliation = document.querySelector('[name="affiliation"]');
let valueSelectAffiliation = "";
selectAffiliation.addEventListener("change", function (event) {
  valueSelectAffiliation = event.target.value;
});
const selectSort = document.querySelector('[name="sortBy"]');
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
  renderCharacter(data);
  selectSpecies.selectedIndex = 0;
  selectAffiliation.selectedIndex = 0;
  selectSort.selectedIndex = 0;
  valueSelectSpecies = "";
  valueSelectAffiliation = "";
  sortBy = "";
});
const buttonApply = document.querySelector("#applyFilter");
buttonApply.addEventListener("click", function () {
  const filteredSpecies = filterBySpecies(data, valueSelectSpecies);
  const filteredAffiliation = filterByAffiliation(data, valueSelectAffiliation);
  const clearedData = clearData([...filteredAffiliation, ...filteredSpecies]);
  clearCharacter();
  renderCharacter(clearedData);

  if (sortBy) {
    let sortedData = [];
    if (valueSelectAffiliation || valueSelectSpecies) {
      sortedData = sortData(clearedData, sortBy);
    } else {
      sortedData = sortData(data, sortBy);
    }
    clearCharacter();
    renderCharacter(sortedData);
  }
});
const stats = document.getElementById("stats");
stats.innerHTML = "Resultado de tu selección: " + data.length;
