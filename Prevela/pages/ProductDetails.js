import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

const RenderStars = ({ rating }) => {
  const stars = [];
  const numericRating = parseFloat(rating.toString().replace(',', '.'));
  
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(numericRating)) {
      stars.push(<Feather key={i} name="star" size={18} color="#FFD700" />);
    } else if (i === Math.ceil(numericRating) && numericRating % 1 !== 0) {
      stars.push(<Feather key={i} name="star" size={18} color="#FFD700" style={{ opacity: 0.5 }} />);
    } else {
      stars.push(<Feather key={i} name="star" size={18} color="#CCC" />);
    }
  }
  
  return <View style={{ flexDirection: 'row', gap: 4 }}>{stars}</View>;
};

export default function ProductDetails({ route, navigation }) {
  const { title, average, reviews, imageUrl } = route.params || {};
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#210011" />
      </TouchableOpacity>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          
          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>{average}</Text>
            <RenderStars rating={average} />
            <Text style={styles.avaliationText}>({reviews} Avaliações)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: '#fff0fa',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#210011',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  ratingText: {
    fontSize: 18,
    color: '#666',
  },
  avaliationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
});