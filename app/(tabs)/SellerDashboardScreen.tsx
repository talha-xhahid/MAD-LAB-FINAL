import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SellerDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>Seller Dashboard</Text>
      <TextInput placeholder="Product Name" style={styles.input} />
      <TextInput placeholder="Price" style={styles.input} />
      <Button title="Add Product" onPress={() => alert('Product Added!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, marginVertical: 10, padding: 8 },
});
