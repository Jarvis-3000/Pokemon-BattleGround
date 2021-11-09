export function changeDisabilityUtil({pokemons,name,result}){
  // console.log("editing_utils...")
  
  return pokemons.map((pokemon) => {
    if (pokemon.name === name) {
      pokemon.disable=true
      if(result.msg=="You Won"){
        pokemon.win = true;
      }
      else{
        pokemon.win = false;
      }
      console.log("disabling", pokemon)
    }
    return pokemon;
  });
}


