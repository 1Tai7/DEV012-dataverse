/* eslint-disable indent */
export const filterSpecies = (data, filterForSpecies) => {
  return data.filter(
    (character) => character.facts.species === filterForSpecies
  );
};
export const filterAffiliation = (data, filterForAffiliation) => {
  return data.filter(
    (character) => character.facts.affiliation === filterForAffiliation
  );
};

export function sortData(data, sortBy) {
  const sortedData = [...data];

  if (sortBy === "asc") {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "desc") {
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "ascAge") {
    sortedData.sort((a, b) => a.facts.Age - b.facts.Age);
  } else if (sortBy === "descAge") {
    sortedData.sort((a, b) => b.facts.Age - a.facts.Age);
  } else if (sortBy === "ascHeight") {
    sortedData.sort((a, b) => a.facts.Height - b.facts.Height);
  } else if (sortBy === "descHeight") {
    sortedData.sort((a, b) => b.facts.Height - a.facts.Height);
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
    species: character.facts.species,
    affiliation: character.facts.affiliation,
  }));

  const amount = filteredData.reduce((sum, character) => {
    if (character.species === value) {
      return sum ++;
    }
    return sum;
  }, 0);

  return Number(amount);
};
