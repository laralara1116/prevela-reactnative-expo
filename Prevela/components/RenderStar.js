import React from 'react';
import { Icon } from 'react-native-paper';

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