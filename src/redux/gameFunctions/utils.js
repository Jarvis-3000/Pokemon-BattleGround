export function changeDisabilityUtil({pokemons,name,result}){
  return pokemons.map((pokemon) => {
    if (pokemon.name === name) {
      pokemon.disable=true
      if(result.msg==="You Won"){
        pokemon.win = true;
      }
      else{
        pokemon.win = false;
      }
 
    }
    return pokemon;
  });
}


