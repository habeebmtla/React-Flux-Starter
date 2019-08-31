import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class SampleStore extends ReduceStore {
  getInitialState() {
    return {
      users:[],
      loading: false
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SET_INPUTS:
        return {
          ...state,
          users: action.data
        }       
      default:
        return state;
    }
  }
}

export default new SampleStore(AppDispatcher);
