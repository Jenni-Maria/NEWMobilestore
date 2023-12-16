import React, { useState, useContext } from 'react'; 
import { View, FlatList } from 'react-native'; 
import ProductCard from './ProductCard'; 
import { ShoppingCartContext } from './ShoppingCartContext'; 
import { Image } from 'react-native-elements'; 
const ProductList = () => { 
const { addToCart } = useContext(ShoppingCartContext); 
const [products, setProducts] = useState([ 
{ id: 1, name: 'Apple', price: 0.40, unitPrice: 2.49, image: require('./Apple.jpg') }, 
{ id: 2, name: 'Avocado', price: 1.79, unitPrice: 9.95, image: require('./Avocado.jpg') }, 
{ id: 3, name: 'Banana', price: 0.37, unitPrice: 2.09, image: require('./Banana.jpg') }, 
{ id: 4, name: 'Carrot', price: 0.17, unitPrice: 1.69, image: require('./Carrot.jpg') }, 
{ id: 5, name: 'Clementine', price: 0.11, unitPrice: 1, image: require('./Clementine.jpg') }, 
{ id: 6, name: 'Coconut', price: 1.63, unitPrice: 3.25, image: require('./Coconut.jpg') }, 
{ id: 7, name: 'Cucumber', price: 1.47, unitPrice: 4.19, image: require('./Cucumber.jpg') }, 
{ id: 8, name: 'Ginger', price: 1.64, unitPrice: 10.95, image: require('./Gingers.jpg') }, 
{ id: 9, name: 'Kiwi', price: 0.57, unitPrice: 4.39, image: require('./Kiwi.jpg') }, 
{ id: 10, name: 'Lemon', price: 0.47, unitPrice: 2.49, image: require('./Lemon.jpg') }, 
{ id: 11, name: 'Lime', price: 0.36, unitPrice: 4.49, image: require('./Lime.jpg') }, 
{ id: 12, name: 'Onion', price: 0.17, unitPrice: 1.69, image: require('./Onion.jpg') }, 
{ id: 13, name: 'Orange', price: 0.67, unitPrice: 2.49, image: require('./Orange.jpg') }, 
{ id: 14, name: 'Papaya', price: 6.48, unitPrice: 12.95, image: require('./Papayas.jpg') }, 
{ id: 15, name: 'Paprika', price: 0.83, unitPrice: 5.5, image: require('./Paprika.jpg') }, 
{ id: 16, name: 'Peach', price: 0.45, unitPrice: 3.46, image: require('./Peach.jpg') }, 
{ id: 17, name: 'Pear', price: 0.84, unitPrice: 2.99, image: require('./Pear.jpg') }, 
{ id: 18, name: 'Pea 150g', price: 2.59, unitPrice: 17.27, image: require('./Pea.jpg') }, 
{ id: 19, name: 'Pineapple', price: 2.29, unitPrice: 1.59, image: require('./Pineapple.jpg') }, 
{ id: 20, name: 'Potato', price: 0.09, unitPrice: 1.59, image: require('./Potato.jpg') }, 
{ id: 21, name: 'Tomato', price: 0.37, unitPrice: 4.09, image: require('./Tomato.jpg') }, 
{ id: 22, name: 'Watermelon', price: 5.46, unitPrice: 3.5, image: require('./Watermelon.jpg') }, 
]); 
const formattedProducts = products.map((product) => ({ 
...product, 
formattedPrice: `abt. ${product.price.toFixed(2)} €/pc`, 
quantity: 0, 
})); 
const handleAddToCart = (product, quantity) => { 
console.log('Adding to cart in ProductList:', { ...product, quantity }); 
addToCart({ ...product, quantity }); 
}; 
return ( 
<FlatList 
data={formattedProducts} 
keyExtractor={(item) => item.id.toString()} 
renderItem={({ item }) => ( 
<ProductCard 
product={item} 
handleAddToCart={(quantity) => handleAddToCart(item, quantity)} 
/> 
)} 
/> 
); 
}; 
export default ProductList; 
