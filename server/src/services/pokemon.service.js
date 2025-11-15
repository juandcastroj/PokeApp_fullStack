import { httpClient } from "../utils/httpClient.js";
import { config } from "../config/env.js";

export const fetchPokemons = async () => {
  const { data } = await httpClient.get(`${config.pokeApi}/pokemon?limit=20`);
  return data;
};

export const fetchPokemonById = async (id) => {
  const { data } = await httpClient.get(`${config.pokeApi}/pokemon/${id}`);
  return data;
};
