import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchTab from '../components/SearchTab';

export default function Home() {
  return (
    <SafeAreaProvider>
        <View>
            <SearchTab />
            <Text>Home!</Text>
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});