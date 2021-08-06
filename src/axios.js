import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://us-central1-clone-e5c97.cloudfunctions.net/api'
})
//https://us-central1-clone-e5c97.cloudfunctions.net/api
//http://localhost:5001/clone-e5c97/us-central1/api

export default instance;