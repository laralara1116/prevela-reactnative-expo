import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-paper';

export const RenderStar = (average) => {
  const rating = parseFloat(average.replace(',', '.'));
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <Icon key={i} source="star" size={16} color="#FFD700" />
      );
    } else if (i - 0.5 <= rating) {
      stars.push(
        <Icon key={i} source="star-half-full" size={16} color="#FFD700" />
      );
    } else {
      stars.push(
        <Icon key={i} source="star-outline" size={16} color="#FFD700" />
      );
    }
  }
  
  return stars;
};