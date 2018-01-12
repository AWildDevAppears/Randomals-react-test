import ActionTypes from './ActionTypes'
import Dispatcher from '../Dispatcher'

const Actions = {
  getAllRandomals() {
    Dispatcher.dispatch({
      type: ActionTypes.GET_ALL_RANDOMALS,
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
}

export default Actions;
