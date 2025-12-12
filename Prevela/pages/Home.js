import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchTab from '../components/SearchTab';
import Product from '../components/Product';

export default function Home() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SearchTab />
        <Product
        title='Karen Bachini Pó Facial Solto Rosa Pink Powder' 
        imageUrl='https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211207/P%C3%B3_Facial_Solto_Karen_Bachini_Beauty_j2m281.png'
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 16,
  },
});