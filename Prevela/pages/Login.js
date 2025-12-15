import { useState } from 'react';
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	ActivityIndicator,
	Image,
	ImageBackground,
	Text
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { TextInput, Button } from 'react-native-paper';

const auth = getAuth();

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const signUp = async () => {
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			alert('Sucesso!');
		} catch (e) {
			alert('O registro falhou: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	const signIn = async () => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (e) {
			alert('Falha no login: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<ImageBackground 
			style={styles.gradient} 
			source={{ uri: 'https://res.cloudinary.com/dbkno7jw3/image/upload/v1765819035/Gradient_tyvwkf.png' }}
		>
			<View style={styles.container}>
				<View>
					<Image 
						style={styles.image} 
						source={{ uri: 'https://res.cloudinary.com/dbkno7jw3/image/upload/v1765816140/Prevela_j62xum.png' }} 
					/>
				</View>
				<KeyboardAvoidingView behavior="padding">
					<TextInput
						mode='outlined'
						style={styles.input}
						value={email}
						onChangeText={setEmail}
						autoCapitalize="none"
						activeOutlineColor='#210011'
						keyboardType="email-address"
						placeholder="Digite seu email"
						label="Email"
					/>
					<TextInput
						mode='outlined'
						style={styles.input}
						value={password}
						onChangeText={setPassword}
						activeOutlineColor='#210011'
						secureTextEntry
						placeholder="Digite sua senha"
						label="Senha"
					/>
					{loading ? (
						<ActivityIndicator size={'small'} style={{ margin: 28 }} />
					) : (
						<>
							<Button onPress={signIn}
								mode='contained'
								style={styles.button}
								buttonColor='#fed0ef'
								textColor='#210011'
							>
								Entrar
							</Button>
							<Text style={styles.separator}>Ou</Text>
							<Button onPress={signUp}
								style={styles.button}
								mode='outlined'
								buttonColor='white'
								textColor='#210011'
							>
								Criar conta
							</Button>
						</>
					)}
				</KeyboardAvoidingView>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		flex: 1,
		justifyContent: 'center',
	},
	input: {
		marginVertical: 6,
		paddingHorizontal: 6,
		backgroundColor: 'white'
	},
	button: {
		marginVertical: 6,
		paddingVertical: 6,
		fontSize: 16,
		fontWeight: 'bold'
	},
	separator: {
		textAlign: 'center',
		marginVertical: 6,
		color: '#666',
		fontSize: 16
	},
	image: {
		width: 227,
		height: 57,
		alignSelf: 'center',
		marginVertical: 24,
	},
	gradient: {
		flex: 1,
		backgroundColor: 'white'
	}
});