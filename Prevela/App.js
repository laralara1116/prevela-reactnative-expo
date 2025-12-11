import BottomTab from './components/BottomTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content"
        />
        <BottomTab />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingTop: 16 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
    },
});
