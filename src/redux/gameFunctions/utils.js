export function changeDisabilityUtil({pokemons,name}){
  // console.log("editing_utils...")
  
  return pokemons.map((pokemon) => {
    if (pokemon.name === name) {
      pokemon.disable=true
      console.log("disabling", pokemon)
    }
    return pokemon;
  });
}


