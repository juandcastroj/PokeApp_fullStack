import { Router } from "express";
import pokemonRoutes from "./pokemon.routes.js";

export const router = Router();

router.use("/pokemons", pokemonRoutes);

// Health check
router.get("/", (_, res) => {
  res.json({ status: "ok", message: "API is running" });
});
