import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from '../components/BottomTab';

export default function Home() {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
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