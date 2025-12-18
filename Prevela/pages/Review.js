import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

const navigation = useNavigation();

const handlePress = () => {
    try {
      navigation.navigate("ProductDetails", {
        id,
        title,
        average,
        reviews,
        imageUrl
      });
    } catch (error) {
      console.log("Navigation error:", error);
    }
};

export default function Review() {
    return(
        <SafeAreaView>

        </SafeAreaView>
    )
}