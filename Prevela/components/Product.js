import { Card, Text, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RenderStar } from './RenderStar';
import { CommonActions } from '@react-navigation/native';

const Product = ({
  id,
  title = "Produto", 
  average = "0,0",
  reviews = 0,
  imageUrl = '',
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    try {
      navigation.navigate("ProductDetails", { 
        id, 
        title, 
        average, 
        reviews, 
        imageUrl 
      });
    } catch (error) {
      console.log("Navigation error:", error);
    }
  };

  return (
    <Card style={styles.card} onPress={handlePress}>
      <Card.Cover style={styles.cardImage} source={{ uri: imageUrl }} />
      <Card.Content style={styles.content}>
        <Text variant="titleMedium" style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {title}
        </Text>
        <Text variant="bodyLarge" style={styles.averege}>
          {average} {RenderStar(average)}
        </Text>
        <Text variant="bodySmall" style={styles.reviews}>
          {reviews} Avaliações
        </Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button 
          style={styles.button}
          onPress={handlePress}
          mode="contained"
          buttonColor='#fed0ef'
          textColor='#210011'
        >
          Ver Produto
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: 160,
    height: 150,
  },
  content: {
    paddingTop: 8,
    paddingBottom: 8,
    minHeight: 130,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 23,
  },
  averege: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  reviews: {
    color: '#666',
  },
  actions: {
    marginTop: 'auto',
  },
  button: {
    width: '100%',
  }
});

export default Product;