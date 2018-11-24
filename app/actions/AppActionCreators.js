import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios';
import {API_URL} from '../utils/constants';

const AppActionCreators = {

  getApi(name,endpoint) {
    this.loadingStatus(name,true)
    axios.get(API_URL+endpoint)
    .then(res => {
      this.loadingStatus(name,false)
      this.apiData(name,res.data)
      
    })

  },
  loadingStatus(name,status){
    AppDispatcher.dispatch({
      type: ActionTypes.SET_LOADING_STATUS,
      name,
      status
    });
  },
  apiData(name,data){
    AppDispatcher.dispatch({
      type: ActionTypes.SET_API_DATA,
      name,
      data
    });
  },
  setInputs(inputs){
    AppDispatcher.dispatch({
      type: ActionTypes.SET_INPUTS,
      data: inputs
    });
  },
 
};

export default AppActionCreators;