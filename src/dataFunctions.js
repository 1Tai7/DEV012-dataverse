export const filterBySpecies = (data, filterForSpecies) => {
  return data.filter(
    (character) => character.facts.species === filterForSpecies
  );
};
export const filterByAffiliation = (data, filterForAffiliation) => {
  return data.filter(
    (character) => character.facts.affiliation === filterForAffiliation
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

export const computeStats = (data, value) => {
  const dataFiltered = data.reduce((sum, character) => {
    if (character.species.affiliation === value) sum++;
    return sum;
  }, 0);

  return dataFiltered;
};

/*  switch (sortBy) {
    case "asc":
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "desc":
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "ascAge":
      sortedData.sort((a, b) => a.facts.Age - b.facts.Age);
      break;
    case "descAge":
      sortedData.sort((a, b) => b.facts.Age - a.facts.Age);
      break;
    case "ascHeight":
      sortedData.sort((a, b) => a.facts.Height - b.facts.Height);
      break;
    case "descHeight":
      sortedData.sort((a, b) => b.facts.Height - a.facts.Height);
      break;
    default:
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }*/
