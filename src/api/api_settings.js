import axios from "axios";

export let API_URL = 'https://2200641-cq40245.tw1.ru'

let $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
        if (localStorage.getItem('token')) {
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
            return config
        }else{
            return config
        }
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default $api