import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post['Accept'] = 'application/json';

const Api = Axios.create();



export default Api;