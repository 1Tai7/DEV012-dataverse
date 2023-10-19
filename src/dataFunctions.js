// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return "example";
};

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