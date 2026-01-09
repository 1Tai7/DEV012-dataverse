//data: el conjunto de datos a filtrar. filrterBy: la propiedad por la cual se desea filtrar lo elementos de data.
//filterBySpecies: valor a buscar en filterBy
export const filterBySpecies = (data, filterBy, filterForSpecies) => {
  return data.filter(
    //el filter va a crear un nuevo array con los elementos que pasen la prueba
    //la funcion toma un argumento "character" que representa cada elemento en el conjutno d datos
    //luego comparamos, si el valor obtenido devuleve true lo incluye en la nueva array, si devuelve false los excluye
    (character) => character.facts[filterBy] === filterForSpecies
  );
};
export const filterByAffiliation = (data, filterBy, filterForAffiliation) => {
  return data.filter(
    (character) => character.facts[filterBy] === filterForAffiliation
  );
};
//la data es el parametro que la funcion acepta
export const clearData = (data) => {
  //se crea como una array vacia para poder almacenar elementos unicos de la arra que tenemos anteriormente como "data"
  const uniqueArr = [];
  //forEach es utilizado para iterar sobre cada elemento del array "data"
  //item seria cada elemento de la arra "data"
  data.forEach((item) => {
    //verificamos si item esta en la array uniqueArr
    //el ! es una negacion, entonces si item no esta en uniqueArr, se cumple la condicion
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
};
//data, array de datos. sortBy es el criterio de ordenamiento.
export function sortData(data, sortBy) {
  //creamos una copia de la array utilizando el operador de propagacion, esto no altera la array original
  const sortedData = [...data];
  //si sortBy es igual a asc entonces se ordena sortData de acuerdo a la pripiedad en el primer caso es name
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
