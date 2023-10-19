// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
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