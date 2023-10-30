export const filterBySpecies = (data, filterForSpecies) => {
  return data.filter(
    (character) => character.facts.speciesCharacter === filterForSpecies
  );
};
export const filterByAffiliation = (data, filterForAffiliation) => {
  return data.filter(
    (character) => character.facts.affiliationCharacter === filterForAffiliation
  );
};
export const clearData = (data) => {
  const uniqueArr = [];
  data.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });

  return uniqueArr;
};
export function sortData(data, sortBy) {
  const sortedData = [...data];

  if (sortBy === "asc") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "desc") {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "ascAge") {
    sortedData.sort((a, b) => a.facts.ageCharacter - b.facts.ageCharacter);
  } else if (sortBy === "descAge") {
    sortedData.sort((a, b) => b.facts.ageCharacter - a.facts.ageCharacter);
  } else if (sortBy === "ascHeight") {
    sortedData.sort((a, b) => a.facts.heightCharacter - b.facts.heightCharacter);
  } else if (sortBy === "descHeight") {
    sortedData.sort((a, b) => b.facts.heightCharacter - a.facts.heightCharacter);
  } else {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortedData;
}

//export const computeStats = (data, value) => {
//const dataFiltered = data.reduce((sum, character) => {
// if (character.facts.species === value) sum++;
//return sum;
//}, 0);

//return dataFiltered;
//};
export const computeStats = (data, value) => {
  const filteredData = data.map((character) => ({
    speciesCharacter: character.facts.speciesCharacter,
    affiliationCharacter: character.facts.affiliationCharacter,
  }));

  const amount = filteredData.reduce((sum, character) => {
    if (character.speciesCharacter === value) {
      return sum++;
    }
    return sum;
  }, 0);

  return Number(amount);
};
