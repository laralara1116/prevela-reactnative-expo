import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import BottomTab from './components/BottomTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTab />
    </SafeAreaProvider>
  );
}
