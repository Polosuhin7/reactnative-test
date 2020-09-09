import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthStackParam} from "./Navigator.contract";
import LoginView from "../screens/Auth/LoginView";

const Stack = createStackNavigator<AuthStackParam>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginView} />
        </Stack.Navigator>
    );
};

export default AuthStack;
