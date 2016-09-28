import AppDispatcher from '../AppDispatcher'

const DeleteAction = {
  deletePokemon(index) {
    AppDispatcher.dispatch({
      type: 'DELETE_POKEMON',
      payload: { index }
    })
  }
}

export default DeleteAction