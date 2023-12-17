import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'; 
import { Image } from 'react-native';


const ProductCard = ({ product, handleAddToCart }) => { 
const [quantity, setQuantity] = useState(0); 
const handleIncrement = () => setQuantity(quantity + 1); 
const handleDecrement = () => setQuantity(Math.max(0, quantity - 1)); 
const addToCart = () => { 
handleAddToCart(product, quantity); 
setQuantity(0); 
}; 

    return ( 
    <View style={styles.productCard}> 
            <View style={styles.imageContainer}> 
                <Image source={product.image} style={styles.productImage} /> 
            </View> 
                    <Text style={styles.productName}>{product.name}</Text> 
                    <Text style={styles.productPrice}>{product.formattedPrice} </Text> 
                    <Text style={styles.unitPrice}>{product.unitPrice} €/kg</Text> 
                    <View style={styles.quantityContainer}> 
                <TouchableHighlight onPress={handleDecrement} style={[styles.quantityButton, styles.greenButton]}> 
                    <Text style={styles.quantityButtonText}>-</Text> 
                </TouchableHighlight> 
                    <Text style={styles.quantity}>{quantity} pcs</Text> 
                <TouchableHighlight onPress={handleIncrement} style={[styles.quantityButton, styles.greenButton]}> 
                    <Text style={styles.quantityButtonText}>+</Text> 
                </TouchableHighlight> 
             </View> 
            <TouchableOpacity onPress={addToCart} style={[styles.addToCartButton, styles.greenButton]}> 
                <Text style={styles.addToCartButtonText}>Add to Cart</Text> 
            </TouchableOpacity> 
    </View> 
    ); 
}; 
    const styles = StyleSheet.create({ 
        productCard: { 
            borderWidth: 1, 
            borderColor: '#ccc', 
            borderRadius: 10, 
            padding: 10, 
            backgroundColor: '#fff', 
            margin: 10, 
        }, 
        imageContainer: { 
            alignItems: 'center', 
        }, 
        productImage: { 
            width: 180, 
            height: 150, 
            borderRadius: 10, 
        }, 
        productName: { 
            fontSize: 20, 
            fontWeight: 'bold', 
            marginTop: 5, 
            }, 
        productPrice: { 
            fontSize: 18, 
            }, 
        unitPrice: { 
            fontSize: 16, 
            color: '#555', 
        }, 
        quantityContainer: { 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-around', 
            marginVertical: 5, 
        }, 
        quantityButton: { 
            padding: 15, 
            borderRadius: 10, 
        }, 
        quantityButtonText: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#fff', 
        }, 
        quantity: { 
            fontSize: 18, 
        }, 
        addToCartButton: { 
            backgroundColor: '#8BC34A', 
            padding: 15, 
            borderRadius: 10, 
            marginTop: 10, 
            alignItems: 'center', 
        }, 
        addToCartButtonText: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#fff', 
        }, 
        greenButton: { 
            backgroundColor: '#8BC34A', 
            }, 
}); 
export default ProductCard;
