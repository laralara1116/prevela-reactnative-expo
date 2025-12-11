import { Card, Text, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Product = ({ 
  title = "Produto", 
  average = "0,0",
  reviews = 0 
}) => (
  <Card style={styles.card}>
    <Card.Cover style={styles.cardImage} source={{ uri: '' }} />
    <Card.Content style={styles.content}>
      <Text variant="bodyLarge" style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text variant="bodyLarge" style={styles.averege}>
        {average}
      </Text>
      <Text variant="bodySmall" style={styles.reviews}>
        {reviews} Avaliações
      </Text>
    </Card.Content>
    <Card.Actions>
        <Button style={styles.button}
         mode="contained"
         buttonColor='#fff0fa'
         textColor='#210011'>
            Ver Produto
        </Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 16,
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