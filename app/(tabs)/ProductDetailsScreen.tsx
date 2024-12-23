import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Icon library

// Define the type for the product
interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string; // Added image URL
}



const product: Product =
  {
    
    name: 'Laptop',
    price: 500,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBks98xcOTXXIYF3z87erbFfZ2RE4mWK5myQ&s', // Laptop image URL
    description:"Experience your favorite shows, movies, and games in stunning 4K resolution with the Ultra HD Smart TV. Designed for the modern home, this sleek, energy-efficient TV delivers vibrant colors and sharp details for an immersive viewing experience. Equipped with built-in Wi-Fi, streaming apps, and voice control, it’s the perfect addition to any entertainment setup. Whether you’re watching your favorite movie or playing the latest video game, enjoy every detail in exceptional clarity. Get ready to transform your living room into a cinematic experience."
  }

export default function ProductDetailsScreen() {
  //const { product } = route.params; // Accessing product from route.params

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="shopping-cart" size={24} color="#fff" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('CartScreen')}
        >
          <Icon name="visibility" size={24} color="#fff" />
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 22,
    color: '#4CAF50',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    justifyContent: 'center',
  },
  cartButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9E9E9E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 16,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
