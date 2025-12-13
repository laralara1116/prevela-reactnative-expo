import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './components/BottomTab';
import ProductDetails from './pages/ProductDetails';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Main" 
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="ProductDetails" 
              component={ProductDetails}
              options={{ 
                title: 'Detalhes do Produto',
                headerStyle: { backgroundColor: '#fed0ef' },
                headerTintColor: '#210011',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
    },
});