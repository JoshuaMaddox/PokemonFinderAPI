import React, { Component } from 'react'
import PokemonActions from '../actions/PokemonActions'
import DisplayAllPoke from './DisplayAllPoke'
import PokemonStore from '../stores/PokemonStore'
import DeleteAction from '../actions/DeleteAction'

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: PokemonStore.getPokemon()
    }
    this.fetchPokemon = this.fetchPokemon.bind(this)
    this.onChange = this.onChange.bind(this)
    this.deleteMe = this.deleteMe.bind(this)
  }

  componentWillMount(){
    PokemonStore.startListening(this.onChange)
  }

  componentWillUnmount(){
    PokemonStore.stopListening(this.onChange)
  }

  onChange(){
    this.setState({
      pokemon: PokemonStore.getPokemon()
    })
  }

  deleteMe(e){
    e.preventDefault()
    DeleteAction.deletePokemon(e.target.id)
  }

  fetchPokemon(e) {
    e.preventDefault()
    let { pokemonNumber } = this.refs
    let number = pokemonNumber.value
    if(e.target.id){
      number = e.target.id
    }
    pokemonNumber = ''
    PokemonActions.fetchPokemon(number)
  }

  render() {

    const { pokemon } = this.state
    const { fetchPokemon } = this.props

    //delete to here
    let isPokemon;

      if(!pokemon) {
        isPokemon = ( <div className="container">
          <div className="row pokeTop text-center">
            <div className="col-xs-12 pokeInput">
              <h1>FIND YOU SOME POKEMONS</h1>
              <h4>(enter a number below to get a pokey thing)</h4>
              <form onSubmit={this.fetchPokemon}>
                <input type="number" ref='pokemonNumber' required/>
                <button className="btn btn-primary">Get Pokemon</button>
              </form>
            </div>{/* col-xs-12 POKE INPUT */}
          </div>{/* ROW */}
          <div className="row">
            <div className="col-xs-12">
              <DisplayAllPoke fetchPokemon={this.fetchPokemon}/>
            </div>{/* col-xs-12 */}
          </div>{/* ROW */}
        </div> )  
      } else {
       isPokemon = ( <div className="container">
          <div className="row pokeTop text-center">
            <div className="col-xs-12 pokeInput">
              <h1>FIND YOU SOME POKEMONS</h1>
              <h4>(enter a number below to get a pokey thing)</h4>
              <form onSubmit={this.fetchPokemon}>
                <input type="number" ref='pokemonNumber' required/>
                <button className="btn btn-primary">Get Pokemon</button>
              </form>
            </div>{/* col-xs-12 POKE INPUT */}
          </div>{/* ROW */}
          <div className="row pokeRow text-center">
          {this.state.pokemon.map((item, index) =>(
            <div className="pokeDisplay" key={index} id={index}>
              <div className="onePokeDisplay text-center">
                  <div className="onePokeCard">
                  <div onClick={this.deleteMe} className="deletBtn" id={index}>X</div>
                    <img className='onePokeImg onePokeData' src={item.sprites.front_default}></img>
                      <p className="onePokeData pokeName"><span className="pokeText">Name: </span>{item.name}</p>
                        <hr className='pokeHrOne' />
                      <p className="onePokeData pokeOrder"><span className="pokeText">Order: </span>{item.order}</p>
                        <hr className='pokeHrTwo' />
                      <p className="onePokeData pokeHeight"><span className="pokeText">Height: </span>{item.height}</p>
                        <hr className='pokeHrThree' />
                      <p className="onePokeData pokeWeight"><span className="pokeText">Weight: </span>{item.weight}</p>
                  </div>
              </div>
            </div>
          ))} 
          </div>{/* ROW */}
          <div className="row">
            <div className="col-xs-12">
              <DisplayAllPoke fetchPokemon={this.fetchPokemon}/>
            </div>{/* col-xs-12 */}
          </div>{/* ROW */}
        {/* CONTAINER*/}
        </div>)
      }
      return (
        <div>{isPokemon}</div>  
      ) 
    }


    
    
}


              
            
