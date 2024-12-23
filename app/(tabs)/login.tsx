import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons

export default function Login({  }) {
  const login = async () => {
    // Simulate login process
    // await AsyncStorage.setItem('user', JSON.stringify({ loggedIn: true }));
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      {/* Shopping Icon */}
      <Icon name="shopping-cart" size={80} color="#4CAF50" style={styles.icon} />
      
      {/* Branding or Logo */}
      
      {/* Marketplace App Title */}
      <Text style={styles.title}>Marketplace App</Text>
      
      {/* Username input with icon */}
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput placeholder="Enter username" style={styles.input} />
      </View>

      {/* Password input with icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#aaa" style={styles.inputIcon} />
        <TextInput
          placeholder="Enter password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Login button with styling */}
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      {/* Additional styling or social media buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background color
  },
  icon: {
    marginBottom: 20, // Add spacing below the icon
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  inputIcon: {
    paddingLeft: 16,
  },
  input: {
    width: '85%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 16,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50', // Green button background
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#3b5998', // Facebook color
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
