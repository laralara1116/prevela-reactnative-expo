import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { ref, push } from 'firebase/database';
import { database } from '../Firebase';

export default function Review() {
    const [text, setText] = React.useState("");
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();

    const { productId } = route.params;

    const auth = getAuth();
    const user = auth.currentUser;

    const handleSendReview = async () => {
      if (!text.trim()) {
        Alert.alert("Atenção", "Digite um comentário antes de enviar!");
        return;
      }

      try {
        setLoading(true);

        const reviewRef = ref(database, `avaliacoes/${productId}`);

        await push(reviewRef, {
          userId: user.uid,
          comentario: text,
          userName: user.displayName || "Usuário",
        });

        Alert.alert("Sucesso", "Avaliação enviada! <3");
        setText("");
        navigation.goBack();
      } catch (error) {
        console.log("Erro ao salvar avaliação:", error);
        Alert.alert("Erro", "Não foi possível enviar sua avaliação :(");
      } finally {
        setLoading (false);
      }
    }; 

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <Text>←</Text>
            </TouchableOpacity>
            
            <Text style={styles.title}>Fale da sua experiência</Text>
            <TextInput
            style={styles.comment}
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
            placeholder="Digite seu comentário"
            multiline
            numberOfLines={8}
            />

            <Button
            mode="contained"
            onPress={handleSendReview}
            loading={loading}
            style={styles.sendButton}
            buttonColor="#fed0ef"
            textColor="#210011"
            >
              Enviar avaliação
            </Button>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    paddingTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#210011'
  },
  comment: {
    height: 160,
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
  sendButton: {
    marginTop: 20,
    borderRadius: 8,
  },
});