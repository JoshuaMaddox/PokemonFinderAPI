import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _pokemon = null
let deleteIndex = ''
let _pokeArr = []
let _pokeList = null

class PokemonStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_POKEMON':
          this.checkDuplicate(action.payload.pokemon)
          console.log(_pokemon)
          this.emit('CHANGE')
          break;
        case 'GRAB_POKELIST':
          _pokeList = action.payload.pokeList
          console.log('I am the Store: _pokeList: ')
          this.emit('CHANGE')
          break
        case 'DELETE_POKEMON':
        console.log('I am in the store: ', action.payload.index)
          this.deletePokemon(action.payload.index)
          this.emit("CHANGE")
          break
      }
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }
  stopListening(cb) {
    this.on('CHANGE', cb)
  }

  getPokemon(){
    return _pokemon
  }

  getPokeList(){
    return _pokeList
  }

  deletePokemon(index){
    _pokeArr.splice(index, 1)
    return _pokeList = _pokeArr
  }

  checkDuplicate(pokemon){
    if(_pokeArr.length === 0 ){
        _pokeArr.push(pokemon)
        return (_pokemon = _pokeArr)
    }
    for(var i = 0; i <_pokeArr.length; i++) {
      if(pokemon.name === _pokeArr[i].name) {
        console.log('I am pokemon.name', pokemon.name)
        console.log('I am pokemon.name', _pokeArr[i].name)
        return
      }
    }
    _pokeArr.push(pokemon)
    return _pokemon = _pokeArr
  }

}

export default new PokemonStore