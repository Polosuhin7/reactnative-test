import AsyncStorage from "@react-native-community/async-storage";
import {getDeviceToken, getUniqueId} from "react-native-device-info";
import {axiosInstance} from "../utils/axios";
import {IUser} from "../common/user/IUser";
import {IResponse} from "../common/App";

export default class AuthModel {

    public static async login(params: { username: string, password: string }): Promise<IUser> {
        // TODO: При логине отправлять данные устройства (Единожны!)
        // const deviceId: string = await getUniqueId() || 'test';
        // const deviceToken: string = await AsyncStorage.getItem('deviceToken') || 'test';


        const {data} = <IResponse<IUser>>await axiosInstance.post('/api/auth/login', {
            username: params.username,
            password: params.password
        });
        await this.setToken(data.data);
        await this.setUser(data.data);
        return data.data
    }

    // public static async whoami(): Promise<IUser> {
    //     const {data} = <IResponse<IUser>>await axiosInstance.post('/api/auth/whoami');
    //     this.setUser(data.data);
    //     return data.data
    // }

    public static async refreshDeviceToken(token: string): Promise<void> {
        const deviceId = await getUniqueId();
        await axiosInstance.post('/api/auth/refresh-device-token', {
            deviceToken: token,
            deviceId,
        });
    }

    /**
     * Кэшируем токен и рефреш токен
     * @param data: {token: string, refreshToken: string}
     */
    public static async setToken(data: { token: string, refreshToken: string }): Promise<void> {
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('refreshToken', data.refreshToken);
    }

    public static async setUser(user: IUser): Promise<void> {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    }
}
