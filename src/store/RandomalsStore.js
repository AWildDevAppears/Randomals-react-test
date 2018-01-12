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

      for (let user in data) {
        let items = Object.keys(data[user]).map((item) => {
          data[user][item].id = item;

          if (data[user][item].likes) {
            data[user][item].likes = Object.keys(data[user][item].likes).map((uid) => data[user][item].likes[uid]);
          } else {
            data[user][item].likes = [];
          }

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
        break;
      case ActionTypes.DELETE_RANDOMAL:
        this.deleteRandomal(action.randomal, action.user);
        break;
      case ActionTypes.LIKE_RANDOMAL:
        this.likeRandomal(action.randomal, action.user);
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
    randomal.likes = {};
    FBApp.database().ref(`randomals/${user.uid}`).push(randomal);
  }

  deleteRandomal(randomal, user) {
    if (user.uid === randomal.creator) {
      FBApp.database().ref(`randomals/${user.uid}/${randomal.id}`).remove();
    }
  }

  likeRandomal(randomal, user) {
    if (randomal.likes.filter((uid) => uid === user.uid).length === 0) {
      FBApp.database().ref(`randomals/${randomal.creator}/${randomal.id}/likes`).push(user.uid);
    }
  }
}


export default new RandomalsStore();
