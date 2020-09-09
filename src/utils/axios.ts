import axios from "axios";
import config from "../config/config";
import AsyncStorage from "@react-native-community/async-storage";

const BASE_URL: string = config.baseUrl;

axios.interceptors.request.use(async (config) => {
    config.baseURL = BASE_URL;
    const token = await AsyncStorage.getItem('token');
    if (token) {
        try {
            axios.defaults.headers = {Authorization: `Bearer ${token}`};
            config.headers = {Authorization: `Bearer ${token}`};
        } catch (err) {
            console.log(err);
        }
    }
    return config;
});

let tryRefresh = false;
let refreshDelay = 300;
axios.interceptors.response.use(async (response) => {
        if(response.data) {
            const data = response.data;
            if(!data.success) throw {name: data.error, message: data.message};
        }

        return response
    },
    async (err) => {
        // Пытаемся сделать рефреш однократно остальные запросы возвращаем как есть
        if (err && err.response && err.response.status === 401) {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (!tryRefresh) {
                try {
                    tryRefresh = true;
                    const response = await axios.post('/api/auth/refresh', {refreshToken});
                    axios.defaults.headers = {Authorization: `Bearer ${response.data.data.token}`};
                    await AsyncStorage.setItem('refreshToken', response.data.data.refreshToken);
                    await AsyncStorage.setItem('token', response.data.data.token);
                    setTimeout(() => tryRefresh = false, refreshDelay);
                } catch (error) {
                    console.log(error);
                    refreshDelay += refreshDelay;
                    // TODO: logout if timout/401
                    // store.dispatch(appReady());
                    // store.dispatch(authLogout());
                }
            }
            return axios(err.config)
        }
        if(err.message === 'Network Error') {
            throw {name: 888, message: "Network Error"};
        }
        if(err.response && err.response.data) {
            throw {name: err.response.data.error, message: err.response.data.message}
        }
        if(err.response && err.response.status >= 400) {
            throw {name: err.response.status, message: err.message};
        }
        return err
    });

// Set config defaults when creating the instance
export const axiosInstance = axios;
