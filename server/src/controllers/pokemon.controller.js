import {
  fetchPokemons,
  fetchPokemonById
} from "../services/pokemon.service.js";

export const getAllPokemons = async (req, res, next) => {
  try {
    const data = await fetchPokemons();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getPokemonById = async (req, res, next) => {
  try {
    const data = await fetchPokemonById(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
