import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetails({ route }) {
  const { title, average, reviews, imageUrl } = route.params || {};
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
    </View>
  );
}