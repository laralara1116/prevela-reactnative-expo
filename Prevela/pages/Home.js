import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchTab from '../components/SearchTab';
import Product from '../components/Product';

export default function Home() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.searchContainer}>
        <SearchTab />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.greeting}>Que bom te ver!</Text>

        <View style={styles.card}>
          <View style={styles.productWrapper}>
            <Product id='1'
              title='Karen Bachini Pó Facial Solto Rosa Pink Powder' 
              imageUrl='https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211207/P%C3%B3_Facial_Solto_Karen_Bachini_Beauty_j2m281.png'
            />
          </View>

          <View style={styles.productWrapper}>
            <Product id='2'
              title='contém1g Paleta de Sombras Electric Purple' 
              imageUrl='https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211218/Paleta_de_Sombras_Cont%C3%A9m_1g_rrqfmo.png'
            />
          </View>
          
          <View style={styles.productWrapper}>
            <Product id
              title='Vizze-la Gotas Fix Blindagem' 
              imageUrl='https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211188/Gotas_Fix_Blindagem_Vizzela_zcn8wx.png'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    flex: 1,
    fontSize: 26,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productWrapper: {
    width: '50%',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
});