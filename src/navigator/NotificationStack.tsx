import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NotificationStackParam} from "./Navigator.contract";
import Notification from "../screens/Notification/Notification";

const Stack = createStackNavigator<NotificationStackParam>();

function NotificationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    );
}

export default NotificationStack;
