import React, { useState, useRef } from 'react'; 
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'; 
import Carousel, { Pagination } from 'react-native-snap-carousel'; 

const OfferBanner = () => { 
const carouselRef = useRef(null); 
const windowWidth = Dimensions.get('window').width; 
const [offers, setOffers] = useState([ 
    { 
    id: '1', 
        image: require('../images/homepage/vegetables.png'), 
        text: 'For a limited time only: All vegetables -20%', 
    }, 
    { 
    id: '2', 
        image: require('../images/homepage/fruits.png'), 
        text: 'Lots of special offers on vegetables and fruits!', 
    }, 
    { 
    id: '3', 
        image: require('../images/produce/clementines.png'), 
        text: 'Special offer: Clementines 1€/kg!', 
    }, 
    ]); 
    const renderOfferItem = ({ item }) => ( 
    <View style={styles.banner}> 
        <Image source={item.image} style={styles.bannerImage} /> 
            <View style={styles.textContainer}> 
                <Text style={styles.bannerText}>{item.text}</Text> 
            </View> 
    </View> 
    ); 
    return ( 
    <View style={styles.container}> 
        <Carousel 
            ref={carouselRef} 
            data={offers} 
            renderItem={renderOfferItem} 
            sliderWidth={windowWidth} 
            itemWidth={windowWidth * 0.8} 
            loop 
            autoplay 
            autoplayInterval={5000} 
            layout="default" 
        /> 
        <Pagination 
            dotsLength={offers.length} 
            activeDotIndex={carouselRef.current ? carouselRef.current.currentIndex : 0} 
            containerStyle={styles.paginationContainer} 
            dotStyle={styles.paginationDot} 
            inactiveDotStyle={styles.paginationInactiveDot} 
            inactiveDotOpacity={0.4} 
            inactiveDotScale={0.6} 
        /> 
    </View> 
); 
}; 
    const styles = StyleSheet.create({ 
        container: { 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
        }, 
        banner: { 
            width: '100%', 
            height: 300, 
            alignItems: 'center', 
            borderRadius: 20, 
            overflow: 'hidden', 
        }, 
        bannerImage: { 
            width: '100%', 
            height: '100%', 
        }, 
        textContainer: { 
            position: 'absolute', 
            bottom: 0, 
            backgroundColor: 'rgba(164, 198, 57, 0.8)', 
            width: '100%', 
            padding: 10, 
        }, 
        bannerText: { 
            color: 'white', 
            fontSize: 18, 
            textAlign: 'center', 
        }, 
        paginationContainer: { 
            position: 'absolute', 
            bottom: 0, 
            alignSelf: 'center', 
            paddingVertical: 10, 
        }, 
        paginationDot: { 
            width: 8, 
            height: 8, 
            borderRadius: 4, 
            marginHorizontal: 8, 
            backgroundColor: 'rgba(255, 255, 255, 0.92)', 
        }, 
        paginationInactiveDot: { 
            width: 8, 
            height: 8, 
            borderRadius: 4, 
            marginHorizontal: 8, 
            backgroundColor: 'rgba(255, 255, 255, 0.4)', 
        }, 
        }); 
export default OfferBanner; 
