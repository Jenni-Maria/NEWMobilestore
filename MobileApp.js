import * as React from 'react';
import { useState, useLayoutEffect } from 'react';
import { Button, Dimensions, View, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { StyleSheet, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OfferBanner from './screens/OfferBanner';
import { getAuth, onAuthStateChanged} from '@firebase/auth'; 
import { useNavigation } from '@react-navigation/native';
import AboutUsSection from './screens/AboutUsSection';
import NewInBanner from './screens/NewInBanner';
//import ShoppingCart from './screens/ShoppingCart';
import ProductList from './screens/ProductList';
//import { Card, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import ShoppingCartContext, { ShoppingCartProvider } from './screens/ShoppingCartContext'; 

//import { UserAddOutlined } from '@ant-design/icons';

  const Stack = createNativeStackNavigator(); 

  const HomeRoute = ({ route }) => { 
  const navigation = useNavigation(); 
  const auth = getAuth(); 
  const [isAuthenitcated, setIsAuthenticated] = useState(''); 
  const authListener = () => { 
    auth.onAuthStateChanged((user) => { 
      if (user) { 
      setIsAuthenticated(true); 
      } else { 
      setIsAuthenticated(false); 
      }
}) 
} 
React.useEffect(() =>{ 
authListener(); 
}, [] 
) 
  const handleLoginPress = () => { 
  navigation.navigate('Login'); 
}; 
  const handleLogout = async () => { 
console.log('Logging out...'); 
console.log('Logging out auth ', auth); 
  auth.signOut(); 
console.log('Logged out successfully.'); 
  setLoginMessage({ message: '', color: 'black' }); 
  navigation.navigate('Home'); 
}; 
  return ( 
    <ScrollView style={{ flex: 1, backgroundColor: '#fcfcfc', paddingTop: 20, paddingHorizontal: 16 }}> 
      { isAuthenitcated && ( <Button title="Log out" onPress={handleLogout}></Button>)} 
      { !isAuthenitcated && (<Button title="Log in here" onPress={handleLoginPress}></Button>)} 
        <OfferBanner /> 
        <AboutUsSection navigation={navigation} />
        <NewInBanner /> 
    </ScrollView> 
); 
}; 


const ProductRoute = () => (
  <ShoppingCartProvider> 
    <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
      <ProductList />
    </View>
  </ShoppingCartProvider> 
);

const AboutUsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
    <Text>About us</Text>
    <Text>CONTENT WILL BE ADDED HERE DURING PROJECT</Text>
  </View>
);

const ContactRoute = () => (
  <View style={[styles.container, styles.contactContainer]}> 
    {/*<Card containerStyle={styles.cardContainer}> 
    <Card.Title style={styles.cardTitle}>Contact Us</Card.Title> 
<Card.Divider /> 
    <Text style={styles.contactText}> 
    For any inquiries or assistance, please feel free to reach out to us: 
    </Text> 
      <ListItem bottomDivider> 
      <Icon name="mail" type="material" /> 
        <ListItem.Content> 
          <ListItem.Title style={styles.pullLeft}>Email:</ListItem.Title> 
          <ListItem.Subtitle style={styles.pullLeft}>contact@fruggies.com</ListItem.Subtitle> 
          </ListItem.Content> 
        </ListItem> 
      <ListItem bottomDivider> 
      <Icon name="phone" type="material" /> 
      <ListItem.Content> 
          <ListItem.Title style={styles.pullLeft}>Phone:</ListItem.Title> 
          <ListItem.Subtitle style={styles.pullLeft}>+1 (123) 456-7890</ListItem.Subtitle> 
        </ListItem.Content> 
      </ListItem> 
   </Card>  */}
  </View> 
); 


const renderScene = SceneMap({
  home: HomeRoute,
  product: ProductRoute,
  about: AboutUsRoute,
  contact: ContactRoute,
});

const renderTabBar = (props) => (
  <TabBar {...props} indicatorStyle={{ backgroundColor: '#fff' }}
  style={{ backgroundColor: '#6ea133' }} />
);

const MobileApp = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({

        headerRight: () => (
          //<UserAddOutlined onPress={() => navigation.navigate('Create Account')}/>
          <Button title="Create account"
          onPress={() =>
          navigation.navigate('Create Account')}/>

    )
})
}, )

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home' },
    { key: 'product', title: 'Product' },
    { key: 'about', title: 'About us' },
    { key: 'contact', title: 'Contact' },
  ]);

  return (
    <View style={styles.container}> 
      <ShoppingCartProvider> 

      <TabView style={styles.container}
        renderTabBar={renderTabBar}
        initialLayout={{ width: Dimensions.get('window').width }}
        navigationState={{ index, routes }}
        //renderScene={renderScene}
        renderScene={({ route }) => {
            switch (route.key) { 
              case 'home': 
              return <HomeRoute />; 
              case 'product': 
              return <ProductRoute />; 
              case 'about': 
              return <AboutUsRoute />; 
              case 'contact': 
              return <ContactRoute />; 
              
              default: 
              return null; 
          }
        }}
        onIndexChange={setIndex}
        />
      <TouchableOpacity 
        style={styles.shoppingCartIconContainer} 
        onPress={() => navigation.navigate('shoppingCart')}> 
          <View style={styles.shoppingCartIconWrapper}> 
            <Icon name="shoppingcart" size={40} color="#000000" /> 
          </View> 
        </TouchableOpacity> 
      </ShoppingCartProvider> 
    </View> 
); 
}; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shoppingCartIconContainer: { 
    position: 'absolute', 
    bottom: 20, 
    right: 20, 
    }, 
  shoppingCartIconWrapper: { 
    backgroundColor: '#6ea133', 
    borderRadius: 50, 
    padding: 15, 
    }, 
  contactContainer: { 
    padding: 16, 
    backgroundColor: '#fcfcfc', 
    }, 
  cardContainer: { 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
    }, 
  cardTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    }, 
  contactText: { 
    fontSize: 16, 
    marginBottom: 8, 
    }, 
  pullLeft: { 
    marginLeft: 10, 
    }, 
    }); 

export default MobileApp;
