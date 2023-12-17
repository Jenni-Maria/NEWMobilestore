import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
//import { Card } from 'react-native-elements';



const AboutUsScreen = () => (
    <ScrollView style={{ flex: 1, backgroundColor: '#fcfcfc', padding: 16 }}>
      {/*<Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>About Us</Card.Title>
        <Card.Divider />
        <View style={styles.imageContainer}>
          <Image
            source={require('./images/homepage/AboutUsFruits.jpg')}
            style={styles.image}
            resizeMode="cover"
/>
        </View>*/}
        <Text style={styles.aboutText}>
        {"\n"}{"\n"}   
        Welcome to FRUGGIES, where our passion for fresh and nutritious produce meets the convenience of modern technology.
        We are a dedicated team committed to transforming the way you experience and access fruits and vegetables.
        {"\n"}{"\n"}
        At FRUGGIES, we understand the importance of healthy eating in today's fast-paced world.
        Our mission is to bridge the gap between you and the finest, farm-fresh produce.
        Through our mobile application, we strive to make your journey towards a healthier lifestyle easier and more enjoyable.
        {"\n"}{"\n"}
        Thank you for choosing FRUGGIES.
        Together, let's embrace the goodness of fresh produce and make healthy living a delightful experience.
        </Text>
        {/* Add more content as needed */}
      {/*</Card>*/}
    </ScrollView>
  );
 
  const styles = StyleSheet.create({
    
    cardContainer: {
      borderRadius: 10,
      shadowColor: '#6ea133',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 5,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    aboutText: {
      fontSize: 16,
      marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
      },
  });



export default AboutUsScreen;

