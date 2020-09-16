import Axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const instance = Axios.create({
    baseURL: apiUrl,

});

export default instance;
