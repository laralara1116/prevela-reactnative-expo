import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { database } from '../Firebase';
import SearchTab from '../components/SearchTab';
import Product from '../components/Product';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosRef = ref(database, "produtos");

    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const lista = Object.entries(data).map(([id, produto]) => ({
          id,
          nome: produto.nome,
          img: produto.img,
          average: produto.average || "0,0",
          reviews: produto.reviews || 0,
        }));

        setProdutos(lista);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchTab />
      </View>

      <Text style={styles.greeting}>Que bom te ver!</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productWrapper}>
            <Product
              id={item.id}
              title={item.nome}
              imageUrl={item.img}
              average={item.average ?? "0,0"}
              reviews={item.reviews ?? 0}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 26,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  productWrapper: {
    width: '50%',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 'auto',
  },
});