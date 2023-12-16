// App.js
import * as React from 'react';
import MobileApp from './MobileApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './screens/CreateAccount';

import LoginScreen from './screens/LoginScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ShoppingCart from './screens/ShoppingCart';
//import { ShoppingCartProvider } from '@ant-design/icons';
import { ShoppingCartProvider } from './screens/ShoppingCartContext'; 


export default function MobileStore() {

  const Stack = createNativeStackNavigator();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); 
  const handleLogout = () => {setIsAuthenticated(false);
  }; 


  return (
  <ShoppingCartProvider> 
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
          >
          {(props) => ( 
          <MobileApp {...props} isAuthenticated={isAuthenticated} handleLogout={handleLogout} /> 
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
          title: 'Log in', 
          headerBackTitle: 'Back', 
          }} 
          /> 
        <Stack.Screen 
          name="AboutUs" 
          component={AboutUsScreen} 
          options={{ 
          title: 'About Us', 
          }} 
        /> 
        <Stack.Screen 
          name="shoppingCart" 
          component={ShoppingCart} 
          options={{ 
          title: 'Shopping Cart', 
          headerTitle: 'Shopping Cart', 
          }} 
        /> 


    </Stack.Navigator>
   </NavigationContainer>
   </ShoppingCartProvider> 
  );
}