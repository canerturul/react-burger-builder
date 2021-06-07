import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burgerbuilder-4dd1f-default-rtdb.firebaseio.com/'
});

export default instance;