import React from 'react'; 
import { View, Text, TouchableOpacity, Image } from 'react-native'; 

const AboutUsSection = ({ navigation }) => { 
const handleReadMore = () => {navigation.navigate('AboutUs'); 
}; 
    return ( 
        <View style={{ alignItems: 'center', marginBottom: 20, position: 'relative', top: 30 }}> 
            <View 
                style={{ 
                    backgroundColor: '#8BC34A', 
                    borderRadius: 10, 
                    width: '85%', 
                    overflow: 'hidden', 
                }}> 
                <Image 
                    source={require('../images/homepage/fruggies.png')} 
                    style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5,
                    //borderBottomLeftRadius: 5, borderBottomRightRadius: 5
                     }}/> 
                    <View style={{ padding: 15, alignItems: 'center' }}> 
                            <Text style={{ marginTop: 10, fontSize: 16, textAlign: 'center', color: 'white' }}> 
                                Welcome to Fruggies – your one-stop destination for the freshest and finest fruits and vegetables. 
                            </Text> 
                            <TouchableOpacity onPress={handleReadMore} style={{ marginTop: 10, backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 }}> 
                                <Text style={{ color: 'white' }}>Read more</Text> 
                            </TouchableOpacity> 
                    </View> 
                </View> 
        </View> 
); 
}; 
export default AboutUsSection;
