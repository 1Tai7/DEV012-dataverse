export const filterBySpecies = (data, filterBy, filterForSpecies) => {
  return data.filter(
    (character) => character.facts[filterBy] === filterForSpecies
  );
};
export const filterByAffiliation = (data, filterBy, filterForAffiliation) => {
  return data.filter(
    (character) => character.facts[filterBy] === filterForAffiliation
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
    sortedData.sort(
      (a, b) => a.facts.heightCharacter - b.facts.heightCharacter
    );
  } else if (sortBy === "descHeight") {
    sortedData.sort(
      (a, b) => b.facts.heightCharacter - a.facts.heightCharacter
    );
  } else {
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortedData;
}

export function computeStats(data) {
  let stats = 0;
  data.map(() => stats++);
  return stats;
}
export function ageSumatory(data) {
  let agesSumatory = 0;
  data.reduce((accumulator, currentValue) => {
    if (accumulator) {
      agesSumatory +=
        parseInt(accumulator.facts.ageCharacter) +
        parseInt(currentValue.facts.ageCharacter);
    }
    agesSumatory += parseInt(currentValue.facts.ageCharacter);
  });
  return agesSumatory;
}
