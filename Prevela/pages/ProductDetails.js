import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { ref, onValue } from 'firebase/database';
import { database } from '../Firebase';
import Feather from '@expo/vector-icons/Feather';
import { RenderStar } from '../components/RenderStar';

export default function ProductDetails({ route, navigation }) {
  const { id, title, average, reviews, imageUrl } = route.params || {};

  const goReview = () => {
    navigation.navigate("Review", { productId: id });
  };

  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    if (!id) return;

    const reviewsRef = ref(database, `avaliacoes/${id}`);

    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const lista = Object.entries(data).map(([key, value]) => ({
          id: key,
          comentario: value.comentario,
          userId: value.userId,
        }));

        setReviewsList(lista);
      } else {
        setReviewsList([]);
      }
    });
    return () => unsubscribe();
  }, [id]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#210011" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image} 
        />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text variant="bodyLarge" style={styles.average}>
            {average} {RenderStar(average)}
          </Text>
        </View>

        <Button
        onPress={goReview}
        mode="contained"
        buttonColor='#fed0ef'
        textColor='#210011'
        >
          Fazer avaliação
        </Button>

        <View style={{ marginTop: 24}}>
          <Text style={{ fontsize: 20, fontWeight: 'bold', marginBottom: 12}}>
            Avaliações
          </Text>

          {reviewsList.length === 0 ? (
            <Text style={{ color: '#666' }}>
              Nenhuma avaliação ainda. Seja o primeiro!
            </Text>
          ) : (
            reviewsList.map((item) => (
              <View
                key={item.id}
                style={{
                backgroundColor: '#fff0fa',
                padding: 12,
                borderRadius: 8,
                marginBottom: 10,
              }} 
            >
              <Text style={{ fontSize: 16 }}>
                {item.comentario}
              </Text>
            </View>
            ))
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0fa',
    borderRadius: 100,
    shadowColor: '#000',
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    marginTop: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#210011',
  },
  button: {
    width: '100%',
  },
  average: {
    fontSize: 20
  }
});