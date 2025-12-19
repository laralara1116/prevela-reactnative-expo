import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';

export default function Review() {
    const [text, setText] = React.useState("");
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
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
        </SafeAreaView>
    )
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
});