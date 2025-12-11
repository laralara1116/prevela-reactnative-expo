import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchTab from '../components/SearchTab';
import Product from '../components/Product';

export default function Home() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <SearchTab />
        <Product />
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