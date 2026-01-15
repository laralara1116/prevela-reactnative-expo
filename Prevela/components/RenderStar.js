import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

// Componente para MOSTRAR estrelas (não clicável)
export const RenderStar = (average) => {
  const rating = parseFloat(average.replace(',', '.'));
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Icon 
          key={i} 
          source="star" 
          size={'auto'} 
          color="#FFD700" 
        />
      );
    } else if (i - 0.5 <= rating) {
      stars.push(
        <Icon 
          key={i} 
          source="star-half-full" 
          size={'auto'} 
          color="#FFD700" 
        />
      );
    } else {
      stars.push(
        <Icon 
          key={i} 
          source="star-outline" 
          size={'auto'} 
          color="#666" 
        />
      );
    }
  }

  return stars;
};

// Componente para CLICAR nas estrelas (interativo)
export const StarRating = ({ onRatingChange, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarPress = (starNumber) => {
    setRating(starNumber);
    if (onRatingChange) {
      onRatingChange(starNumber);
    }
  };

  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity 
          key={i} 
          onPress={() => handleStarPress(i)}
          style={styles.starButton}
        >
          <Icon 
            source={i <= rating ? "star" : "star-outline"}
            size={40} 
            color={i <= rating ? "#FFD700" : "#CCC"} 
          />
        </TouchableOpacity>
      );
    }
    
    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  starButton: {
    padding: 4,
  }
});