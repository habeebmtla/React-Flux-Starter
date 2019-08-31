import axios from 'axios';
import AppActionCreators from './AppActionCreators'

var numberOfAjaxCAllPending = 0;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    numberOfAjaxCAllPending++;
    AppActionCreators.setInputs({loading:true});
    return config;
}, function (error) {
    hideLoading();
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    hideLoading();
    return response;
}, function (error) {
    hideLoading();
    return Promise.reject(error);
});

function hideLoading(){
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending == 0) {
      AppActionCreators.setInputs({loading:false});
    }
}

export default axios;