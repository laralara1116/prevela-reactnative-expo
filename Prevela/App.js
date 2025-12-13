import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import Home from './pages/Home';
import Desejos from './pages/Desejos';
import Perfil from './pages/Perfil';
import ProductDetails from './pages/ProductDetails';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff0fa" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#fff0fa' },
            tabBarActiveTintColor: '#210011',
            tabBarInactiveTintColor: '#210011',
            tabBarActiveBackgroundColor: '#ffc9ef',
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather name="home" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen 
            name="Desejos" 
            component={Desejos}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather name="heart" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen 
            name="Perfil" 
            component={Perfil}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather name="user" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen 
            name="ProductDetails" 
            component={ProductDetails}
            options={{
              tabBarButton: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}