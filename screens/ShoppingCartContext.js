import React, { createContext, useState, useContext, useEffect} from 'react';

export const ShoppingCartContext = createContext({}); 
export const ShoppingCartProvider = ({ children }) => {
    
const [cart, setCart] = useState([]); 
const addToCart = (item) => { 
console.log('Adding to cart in context:', item); 
//setCart((prevCart) => [...prevCart, item]); 
const isItemInCart = cart.find((cartItem)=>cartItem.id === item.id); 
console.log('Is item in cart', isItemInCart) 
if (isItemInCart) { 
setCart ( 
cart.map((cartItem)=> 
cartItem.id === item.id 
? {...cartItem, quantity: cartItem.quantity +1} 
: cartItem) 
) 
} else { 
setCart([...cart,{...item, quantity:1}]) 
console.log('else', cart) 
} 
}; 
const removeFromCart = (item) => { 
console.log('Removing from cart in context:', item); 
const indexToRemove = cart.findIndex((cartItem) => cartItem.id === item.id); 
if (indexToRemove !== -1) { 
const updatedCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)]; 
setCart(updatedCart); 
} 
}; 
const clearCart = () => { 
console.log('Clearing cart in context'); 
setCart([]); 
}; 
const contextValue = { 
cart, 
addToCart, 
removeFromCart, 
clearCart, 
}; 
console.log('contextValue ', contextValue, cart); 
return ( 
<ShoppingCartContext.Provider value={contextValue}> 
{children} 
</ShoppingCartContext.Provider> 
); 
}; 
export default ShoppingCartContext; 
