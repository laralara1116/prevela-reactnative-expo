import { Card, Text, Button } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RenderStar } from './RenderStar';

const Product = ({ 
  title = "Produto", 
  average = "0,0",
  reviews = 0,
  imageUrl = '',
  navigation,
  productData
}) => {
  
  const handlePress = () => {
    navigation.navigate('ProductDetails', { product: productData });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card style={styles.card}>
        <Card.Cover style={styles.cardImage} source={{ uri: imageUrl }} />
        <Card.Content style={styles.content}>
          <Text variant="bodyLarge" style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <Text variant="bodyLarge" style={styles.averege}>
             {average} {RenderStar(average)}
          </Text>
          <Text variant="bodySmall" style={styles.reviews}>
            {reviews} Avaliações
          </Text>
        </Card.Content>
        <Card.Actions>
            <Button 
              style={styles.button}
              mode="contained"
              buttonColor='#fed0ef'
              textColor='#210011'
              onPress={handlePress}>
                Ver Produto
            </Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 24,
    backgroundColor: '#FFFFFF',
  },
  cardImage: {
    width: 160,
    height: 150,
  },
  content: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    minHeight: 40, 
  },
  averege: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  reviews: {
    color: '#666',
  },
  button: {
    width: '100%',
  }
});

export default Product;