import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios';
import {API_URL} from '../utils/constants';

const AppActionCreators = {

  getApi(name,endpoint) {
    axios.get(API_URL+endpoint)
    .then(res => {
      this.setInputs({
        [name]: res.data
      }) 
    })

  },
  setInputs(inputs){
    AppDispatcher.dispatch({
      type: ActionTypes.SET_INPUTS,
      data: inputs
    });
  },
 
};

export default AppActionCreators;