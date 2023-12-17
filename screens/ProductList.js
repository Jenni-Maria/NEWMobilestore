import React, { useState, useContext } from 'react'; 
import { FlatList } from 'react-native'; 
import ProductCard from './ProductCard';
import { ShoppingCartContext } from './ShoppingCartContext'; 


const ProductList = () => { 
const { addToCart } = useContext(ShoppingCartContext); 
const [products, setProducts] = useState

([ 
    { id: 1, name: 'Apple', price: 0.40, unitPrice: 2.49, image: require('../images/produce/apple.png') }, 
    { id: 2, name: 'Avocado', price: 1.79, unitPrice: 9.95, image: require('../images/produce/avocado.png') }, 
    { id: 3, name: 'Banana', price: 0.37, unitPrice: 2.09, image: require('../images/produce/banana.png') }, 
    { id: 4, name: 'Carrot', price: 0.17, unitPrice: 1.69, image: require('../images/produce/carrot.png') }, 
    { id: 5, name: 'Clementine', price: 0.11, unitPrice: 1, image: require('../images/produce/clementines.png') }, 
    { id: 6, name: 'Coconut', price: 1.63, unitPrice: 3.25, image: require('../images/produce/coconut.png') }, 
    { id: 7, name: 'Cucumber', price: 1.47, unitPrice: 4.19, image: require('../images/produce/cucumber.png') }, 
    { id: 8, name: 'Ginger', price: 1.64, unitPrice: 10.95, image: require('../images/produce/ginger.png') }, 
    { id: 9, name: 'Kiwi', price: 0.57, unitPrice: 4.39, image: require('../images/produce/kiwi.png') }, 
    { id: 10, name: 'Lemon', price: 0.47, unitPrice: 2.49, image: require('../images/produce/lemon.png') }, 
    { id: 11, name: 'Lime', price: 0.36, unitPrice: 4.49, image: require('../images/produce/lime.png') }, 
    { id: 12, name: 'Onion', price: 0.17, unitPrice: 1.69, image: require('../images/produce/onion.png') }, 
    { id: 13, name: 'Orange', price: 0.67, unitPrice: 2.49, image: require('../images/produce/orange.png') }, 
    { id: 14, name: 'Papaya', price: 6.48, unitPrice: 12.95, image: require('../images/produce/papaya.png') }, 
    { id: 15, name: 'Paprika', price: 0.83, unitPrice: 5.5, image: require('../images/produce/paprica.png') }, 
    { id: 16, name: 'Peach', price: 0.45, unitPrice: 3.46, image: require('../images/produce/peach.png') }, 
    { id: 17, name: 'Pear', price: 0.84, unitPrice: 2.99, image: require('../images/produce/pear.png') }, 
    { id: 18, name: 'Pea 150g', price: 2.59, unitPrice: 17.27, image: require('../images/produce/pea.png') }, 
    { id: 19, name: 'Pineapple', price: 2.29, unitPrice: 1.59, image: require('../images/produce/pineapple.png') }, 
    { id: 20, name: 'Potato', price: 0.09, unitPrice: 1.59, image: require('../images/produce/potatoes.png') }, 
    { id: 21, name: 'Tomato', price: 0.37, unitPrice: 4.09, image: require('../images/produce/tomato.png') }, 
    { id: 22, name: 'Watermelon', price: 5.46, unitPrice: 3.5, image: require('../images/produce/watermelon.png') }, 
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
