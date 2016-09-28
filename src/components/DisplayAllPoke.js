import React, { Component } from 'react'
import AllPokeActions from '../actions/AllPokeActions'
import PokemonStore from '../stores/PokemonStore'
import DeleteAction from '../actions/DeleteAction'

export default class DisplayAllPoke extends Component {

  constructor(){
    super()
    this.state = {
      pokeList: PokemonStore.getPokeList()
    }
    this.onChange = this.onChange.bind(this)
    this.getPokes = this.getPokes.bind(this)
  }

  componentWillMount(){
    PokemonStore.startListening(this.onChange)
  }

  componentWillUnmount(){
    PokemonStore.stopListening(this.onChange)
  }

  onChange(){
    this.setState({
      pokeList: PokemonStore.getPokeList()
    })
  }

  getPokes(){
    AllPokeActions.fetchPokeList()
  }

  //delete to here
  render(){

    const { pokeList } = this.state
    const { fetchPokemon } = this.props

    return (
      <div className='pokeButtons'>
        {pokeList ? pokeList.pokemon_entries.map((poke, num) => (
          <div key={num} onClick={this.props.fetchPokemon} className='pokeListItem' id={poke.entry_number}>{poke.pokemon_species.name}</div>
          )) : <button onClick={this.getPokes} className="btn btn-primary">Get All The Pokemons</button>
        }
      </div>
    )
  }

}