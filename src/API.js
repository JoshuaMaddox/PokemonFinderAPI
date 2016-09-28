import $ from 'jquery'
import ServerActions from './actions/ServerActions'
import AllPokeServerAction from './actions/AllPokeServerAction'

const API = {
  fetchPokemon(number) {
    //Using template strings to concat the number passed
    //from index.js to the PokemonActions.js to here
    //Pokemon in the callback is the data as in (data, err)
    $.get(`http://pokeapi.co/api/v2/pokemon/${number}`, (pokemon, err) =>{
      ServerActions.receivePokemon(pokemon)
    })
  },

  fetchPokeList(){
    $.get(' https://pokeapi.co/api/v2/pokedex/1/', (pokeList, err) => {
      AllPokeServerAction.grabPokeList(pokeList)
    })
  }
}

export default API