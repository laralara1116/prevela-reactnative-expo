import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';
import { StarRating } from '../components/RenderStar';

export default function Review({ route, navigation }) {
    const [cheiroRating, setCheiroRating] = useState(0);
    const [custoRating, setCustoRating] = useState(0);
    const [durabilidadeRating, setDurabilidadeRating] = useState(0);
    const [embalagemRating, setEmbalagemRating] = useState(0);
    const [facilidadeRating, setFacilidadeRating] = useState(0);
    const [text, setText] = useState("");
    
    const handleSubmit = () => {
        console.log('Avaliações:', {
            cheiro: cheiroRating,
            custo: custoRating,
            durabilidade: durabilidadeRating,
            embalagem: embalagemRating,
            facilidade: facilidadeRating,
            comentario: text
        });
    };
    
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.goBack()}
            >
                <Feather name="arrow-left" size={24} color="#210011" />
            </TouchableOpacity>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Fale da sua experiência</Text>

                <View style={styles.ratingCard}>
                    <Text style={styles.subtitle}>Cheiro</Text>
                    <StarRating 
                        onRatingChange={(nota) => setCheiroRating(nota)}
                        initialRating={cheiroRating}
                    />
                </View>

                <View style={styles.ratingCard}>
                    <Text style={styles.subtitle}>Custo-benefício</Text>
                    <StarRating 
                        onRatingChange={(nota) => setCustoRating(nota)}
                        initialRating={custoRating}
                    />
                </View>

                <View style={styles.ratingCard}>
                    <Text style={styles.subtitle}>Durabilidade</Text>
                    <StarRating 
                        onRatingChange={(nota) => setDurabilidadeRating(nota)}
                        initialRating={durabilidadeRating}
                    />
                </View>

                <View style={styles.ratingCard}>
                    <Text style={styles.subtitle}>Embalagem</Text>
                    <StarRating 
                        onRatingChange={(nota) => setEmbalagemRating(nota)}
                        initialRating={embalagemRating}
                    />
                </View>

                <View style={styles.ratingCard}>
                    <Text style={styles.subtitle}>Facilidade de uso</Text>
                    <StarRating 
                        onRatingChange={(nota) => setFacilidadeRating(nota)}
                        initialRating={facilidadeRating}
                    />
                </View>

                <TextInput
                    style={styles.comment}
                    value={text}
                    onChangeText={text => setText(text)}
                    mode="outlined"
                    outlineColor='#88888A'
                    activeOutlineColor='#210011'
                    placeholder="Digite seu comentário"
                    multiline
                    numberOfLines={8}
                    theme={{ colors: { background: '#FFFFFF' } }}
                />

                <Button
                    mode="contained"
                    onPress={handleSubmit}
                    style={styles.submitButton}
                    buttonColor='#fed0ef'
                    textColor='#210011'
                >
                    Enviar Avaliação
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        paddingTop: 100
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#210011',
        textAlign: 'center'
    },
    ratingCard: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#88888A',
        borderRadius: 12,
        backgroundColor: '#FFF'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#210011'
    },
    comment: {
        height: 160,
        marginTop: 8,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    commentContent: {
        backgroundColor: '#FFFFFF'
    },
    submitButton: {
        marginBottom: 24,
        paddingVertical: 6
    }
});