import ActionTypes from './ActionTypes'
import Dispatcher from '../Dispatcher'

const Actions = {
  getAllRandomals() {
    Dispatcher.dispatch({
      type: ActionTypes.GET_ALL_RANDOMALS,
    });
  },

  getMyRandomals(user) {
    Dispatcher.dispatch({
      type: ActionTypes.GET_MY_RANDOMALS,
      user,
    });
  },

  deleteRandomal(randomal) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_RANDOMAL,
      randomal,
    });
  },

  addRandomal(randomal, user) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_RANDOMAL,
      randomal,
      user,
    });
  },

  returnCollectedRandomals(randomals) {
    Dispatcher.dispatch({
      type: ActionTypes.RETURN_RANDOMALS,
      randomals,
    })
  }
}

export default Actions;
