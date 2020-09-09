import React from 'react';
import {
  StatusBar, View, Text
} from 'react-native';
import stores from "./src/stores";
import {observer, Provider} from "mobx-react";

// TODO: !!!
// PushNotification.configure({
//     onRegister: async function(token) {
//         await AsyncStorage.setItem('deviceToken', token.token);
//         try {
//             await AuthModel.refreshDeviceToken(token.token);
//         } catch(error) {
//             console.log(error)
//         }
//     },
//     onNotification: function(notification) {
//         console.log('REMOTE NOTIFICATION ==>', notification);
//     },
//     // Android only: GCM or FCM Sender ID
//     senderID: '939071195291',
//     popInitialNotification: true,
//     requestPermissions: true
// })


setTimeout(() => {
  stores.appStore.setAuth(true)
}, 3000)

const App = () => {
  return (
      <Provider {...stores}>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text>Widget Panel isAuth {stores.appStore.isAuth ? "YES" : "NO"}</Text>
        </View>
      </Provider>
  );
};

export default observer(App);
