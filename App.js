// App.js
import * as React from 'react';
import MobileApp from './MobileApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './screens/CreateAccount';
import Modal from './screens/ModalTest';
import ModalTest from './screens/ModalTest';

export default function MobileStore() {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="MobileApp">
      <Stack.Screen
        name="MobileApp" component={MobileApp} options={{
          title: 'MobileApp',
          headerTitle: 'Fruggies',
        }}
        />
        <Stack.Screen
          name="Create Account" component ={CreateAccount}
          option={{
            headerTitle: 'MobileApp name here',
          }}
          />
    </Stack.Navigator>
   </NavigationContainer> 
  );
}