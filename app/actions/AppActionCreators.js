import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios';
import {API_URL} from '../utils/constants';

var numberOfAjaxCAllPending = 0;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    numberOfAjaxCAllPending++;
    AppActionCreators.setInputs({loading:true});
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending == 0) {
      AppActionCreators.setInputs({loading:false});
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});


const AppActionCreators = {

  getApi(name,endpoint) {
    axios.get(API_URL+endpoint)
    .then(res => {
        this.setInputs({[name]:res.data});      
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