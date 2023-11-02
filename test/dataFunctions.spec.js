import { filterBySpecies } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterBySpecies", () => {
  it("debería filtrar correctamente por una especie", () => {
    // Especifica la especie por la que deseas filtrar
    const filterForSpecies = "Humano";

    // Llama a la función filterBySpecies con los datos de prueba
    const result = filterBySpecies(fakeData, filterForSpecies);

    // Comprueba que el resultado contiene solo personajes con la especie 'Humano'
    for (const character of result) {
      expect(character.facts.speciesCharacter).toBe(filterForSpecies);
    }

    // Comprueba que la longitud del resultado sea la esperada
    expect(result).toHaveLength(16);
  });
  /*describe("filterBySpecies", () => {
  it("should return an empty array if no data is passed", () => {
    const filterForSpecies = "Humano";

    const expectedResult = 16;
    const actualResult = filterBySpecies(fakeData, filterForSpecies);

    expect(actualResult.legth).toEqual(expectedResult);
  });*/
});
