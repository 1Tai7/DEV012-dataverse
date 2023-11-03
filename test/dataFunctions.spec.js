import {
  filterByAffiliation,
  filterBySpecies,
  sortData,
  computeStats,
} from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterBySpecies", () => {
  it("debería filtrar correctamente por una especie, humano", () => {
    // Especifica la especie por la que deseas filtrar
    const filterForSpecies = "Humano";
    // Llama a la función filterBySpecies con los datos de prueba
    const result = filterBySpecies(
      fakeData,
      "speciesCharacter",
      filterForSpecies
    );
    // Comprueba que la longitud del resultado sea la esperada
    expect(result.length).toBe(15);
  });
});
describe("filterBySpecies", () => {
  it("debería filtrar correctamente por una especie, droide", () => {
    // Especifica la especie por la que deseas filtrar
    const filterForSpecies = "Droide";
    // Llama a la función filterBySpecies con los datos de prueba
    const result = filterBySpecies(
      fakeData,
      "speciesCharacter",
      filterForSpecies
    );
    // Comprueba que la longitud del resultado sea la esperada
    expect(result.length).toBe(3);
  });
});
describe("filterByAffiliation", () => {
  it("debería filtrar correctamente por una afiliación, jedi", () => {
    // Especifica la especie por la que deseas filtrar
    const filterForAffiliation = "Jedi";
    // Llama a la función filterBySpecies con los datos de prueba
    const result = filterByAffiliation(
      fakeData,
      "affiliationCharacter",
      filterForAffiliation
    );
    // Comprueba que la longitud del resultado sea la esperada
    expect(result.length).toBe(5);
  });
});
describe("filterByAffiliation", () => {
  it("debería filtrar correctamente por una afiliación, sith", () => {
    // Especifica la especie por la que deseas filtrar
    const filterForAffiliation = "Sith";
    // Llama a la función filterBySpecies con los datos de prueba
    const result = filterByAffiliation(
      fakeData,
      "affiliationCharacter",
      filterForAffiliation
    );
    // Comprueba que la longitud del resultado sea la esperada
    expect(result.length).toBe(3);
  });
});
describe("sortData", () => {
  it("debería ordenar adecuadamente de forma ascendente", () => {
    // Llama a la función sortData para ordenar los datos de prueba de forma ascendente
    const result = sortData(fakeData, "asc");

    // Comprueba que el resultado esté ordenado correctamente
    for (let i = 0; i < result.length - 1; i++) {
      expect(
        result[i].name.localeCompare(result[i + 1].name)
      ).toBeLessThanOrEqual(0);
    }
  });
});
describe("sortData", () => {
  it("debería ordenar adecuadamente de forma descendente", () => {
    // Llama a la función sortData para ordenar los datos de prueba de forma descendente
    const result = sortData(fakeData, "desc");

    // Comprueba que el resultado esté ordenado correctamente
    for (let i = 0; i < result.length - 1; i++) {
      expect(
        result[i].name.localeCompare(result[i + 1].name)
      ).toBeGreaterThanOrEqual(0);
    }
  });
});
describe("computeStats", () => {
  it("debería calcular la suma total de personajes mostrado", () => {
    // Llama a la función computeStats con los datos de prueba
    const result = computeStats(fakeData);

    // Comprueba que el resultado sea la longitud de los datos de prueba
    expect(result).toBe(fakeData.length);
  });
});
