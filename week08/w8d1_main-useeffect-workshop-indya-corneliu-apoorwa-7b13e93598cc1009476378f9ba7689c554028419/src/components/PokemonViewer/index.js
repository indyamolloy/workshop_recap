import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import { set } from "y";

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState();
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  useEffect(async function () {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(response);
  });

  return (
    <div className="pokemon-viewer">
      <p>display pokemon with id {id} here!</p>
    </div>
  );
}

export default PokemonViewer;
