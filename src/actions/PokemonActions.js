import API from '../API'

const PokemonActions = {
  fetchPokemon(number) {
    API.fetchPokemon(number)
  }
}

export default PokemonActions
