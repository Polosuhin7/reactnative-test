import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {SafeAreaProvider} from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

// TODO:
// import colors from "../style/colors";
// import AuthStack from './AuthStack';
// import NotificationStack from "./NotificationStack";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        background: '#fff',
        text: '#000000',
        border: 'rgb(224, 224, 224)',
        primary: 'rgb(255, 45, 85)',
        card: '#282829'
    },
};

const Navigator: React.FC = () => {
    return (
        <></>
    );
    // TODO:
    // const {isLogged} = useSelector((state: IAppState) => state.auth);
    // return (
    //     <SafeAreaProvider>
    //         <NavigationContainer theme={MyTheme}>
    //             {!isLogged ?
    //                 <AuthStack />
    //                 : (
    //                     <Tab.Navigator
    //                         tabBarOptions={{
    //                             activeTintColor: colors.active,
    //                             inactiveTintColor: colors.text,
    //                             showLabel: false
    //                         }}>
    //                         <Tab.Screen
    //                             name="Collection"
    //                             component={CollectionStack}
    //                             options={{
    //                                 tabBarIcon: ({color, size, focused}) => (
    //                                     <Icon name="bulb1" size={30} color={focused ? colors.active : colors.contrastText}/>
    //                                 ),
    //                             }}
    //                         />
    //
    //                     </Tab.Navigator>
    //                 )}
    //         </NavigationContainer>
    //     </SafeAreaProvider>
    // );
};

export default Navigator;
