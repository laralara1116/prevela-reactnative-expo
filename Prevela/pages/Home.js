import { ScrollView, StyleSheet, View, Text } from 'react-native';
import SearchTab from '../components/SearchTab';
import Product from '../components/Product';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchTab />
      </View>

      <ScrollView>
        <Text style={styles.greeting}>Que bom te ver!</Text>

        <View style={styles.card}>
          <View style={styles.productWrapper}>
            <Product
              id="1"
              title="Karen Bachini Pó Facial Solto Rosa Pink Powder"
              imageUrl="https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211207/P%C3%B3_Facial_Solto_Karen_Bachini_Beauty_j2m281.png"
            />
          </View>

          <View style={styles.productWrapper}>
            <Product
              id="2"
              title="contém1g Paleta de Sombras Electric Purple"
              imageUrl="https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211218/Paleta_de_Sombras_Cont%C3%A9m_1g_rrqfmo.png"
            />
          </View>

          <View style={styles.productWrapper}>
            <Product
              id="3"
              title="Vizzela Gotas Fix Blindagem"
              imageUrl="https://res.cloudinary.com/dbkno7jw3/image/upload/v1765211188/Gotas_Fix_Blindagem_Vizzela_zcn8wx.png"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 26,
    paddingHorizontal: 16,
    marginBottom: 16,
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
    marginBottom: 16,
  },
});