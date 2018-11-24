import { ReduceStore } from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class SampleStore extends ReduceStore {
  getInitialState() {
    return {
      users:{loading:true,data:[]}
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SET_INPUTS:
        return Object.assign({},state,action.data)  
      case ActionTypes.SET_LOADING_STATUS:
        return Object.assign({},state,{
          [action.name]:{
            ...state[action.name],
            loading: action.status
          }
        }) ;
      case ActionTypes.SET_API_DATA:
        return Object.assign({},state,{
          [action.name]:{
            ...state[action.name],
            data: action.data
          }
        }) ;      
      default:
        return state;
    }
  }
}

export default new SampleStore(AppDispatcher);
