import { ReduceStore } from 'flux/utils';
import Actions from '../action/randomals/Actions';
import ActionTypes from '../action/randomals/ActionTypes';
import Dispatcher from '../action/Dispatcher';
import FBApp from '../Database';

class RandomalsStore extends ReduceStore {
  randomals = [];

  constructor() {
    super(Dispatcher);

    FBApp.database().ref('randomals').on('value', (snapshot) => {
      let data = snapshot.val()
      this.randomals = [];
      console.log(data)

      for (let user in data) {
        let items = Object.keys(data[user]).map((item) => {
          data[user][item].id = item;
          return data[user][item]
        });
        this.randomals.push(...items);
      }

      // Insert delay so the request does not conflict when we send a write request
      setTimeout(() => Actions.getAllRandomals(), 300)
    });
  }
  reduce(state, action) {
    let s = Object.assign({}, state);

    switch (action.type) {
      case ActionTypes.GET_ALL_RANDOMALS:
        s.list = this.randomals;
        break;
      case ActionTypes.ADD_RANDOMAL:
        this.addRandomal(action.randomal, action.user);
      default:
        console.log(`-- NYI - ${action.type}`);
    }

    return s;
  }

  getInitialState() {
    return {
      list: [],
      myList: [],
    };
  }

  addRandomal(randomal, user) {
    randomal.creator = user.uid;
    FBApp.database().ref(`randomals/${user.uid}`).push(randomal);
  }
}


export default new RandomalsStore();
