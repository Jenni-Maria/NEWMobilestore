import React, { useContext } from 'react'; 
import { View, Text, FlatList, Button } from 'react-native'; 
import { ShoppingCartContext } from './ShoppingCartContext'; 
import { useCart } from './ShoppingCartContext'; 
const ShoppingCart = ({ children }) => { 
const { cart, addToCart, removeFromCart, clearCart } = useContext(ShoppingCartContext); 
const contextValue = useContext(ShoppingCartContext); 
console.log('shoppingCart ', cart); 
return ( 
<View> 
<Text>Shopping Cart</Text> 
{cart.length === 0 ? ( 
<Text>Your cart is empty.</Text> 
) : ( 
<> 
<FlatList 
data={cart} 
keyExtractor={(item) => item.id.toString()} 
renderItem={({ item }) => ( 
<View> 
<Text>{item.name}</Text> 
<Text>{item.price}</Text> 
<Text>{item.quantity} pcs</Text> 
<Button title="Remove" onPress={() => removeFromCart(item)} /> 
</View> 
)} 
extraData={cart} 
/> 
<Button title="Clear Cart" onPress={clearCart} /> 
</> 
)} 
</View> 
); 
}; 
export default ShoppingCart;
