import AppDispatcher from '../AppDispatcher'

const AllPokeServerAction = {
  grabPokeList(pokeList) {
    AppDispatcher.dispatch({
      type: 'GRAB_POKELIST',
      payload: { pokeList }
    })
  }
}

export default AllPokeServerAction
