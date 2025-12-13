import BottomTab from './components/BottomTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './pages/ProductDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>  
      <StatusBar 
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainTabs" component={BottomTab} />
          <Stack.Screen 
            name="ProductDetails" 
            component={ProductDetails}
            options={{
              headerShown: true,
              title: 'Detalhes'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}