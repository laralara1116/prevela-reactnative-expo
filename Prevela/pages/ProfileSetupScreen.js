const ChooseDisplayNameScreen = () => {
  const [displayName, setDisplayName] = useState('');
  const navigation = useNavigation();
  const currentUser = auth.currentUser;

  const handleSaveDisplayName = async () => {
    if (!displayName.trim()) {
      alert('Por favor, digite seu nome');
      return;
    }

    try {
      await updateProfile(currentUser, {
        displayName: displayName.trim()
      });
      
      await setDoc(doc(db, 'users', currentUser.uid), {
        displayName: displayName.trim(),
        email: currentUser.email,
        createdAt: new Date()
      });
      
      navigation.replace('Home'); // ou navigate
    } catch (error) {
      console.error('Erro ao salvar nome:', error);
      alert('Erro ao salvar nome. Tente novamente.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://res.cloudinary.com/dbkno7jw3/image/upload/v1765819035/Gradient_tyvwkf.png' }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text>Como você gostaria de ser chamado?</Text>
        <TextInput
          value={displayName}
          onChangeText={setDisplayName}
          placeholder="Seu nome"
        />
        <Button title="Continuar" onPress={handleSaveDisplayName} />
      </View>
    </ImageBackground>
  );
};