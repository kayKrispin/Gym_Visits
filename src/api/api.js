import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post['Accept'] = 'application/json';

const API_URL ='http://localhost:8000/api/gymvisitors/';
const Api = Axios.create();

Api.interceptors.request.use(function(config){
    config.url = API_URL + config.url;

    return config;
},function(err){
    return Promise.reject(err);
});


Api.interceptors.response.use(function(res){
        return res;
},function(err){
    return Promise.reject(err)
});

export default Api;