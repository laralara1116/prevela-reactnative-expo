import React from "react";
import { Searchbar } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';

const SearchTab = () => {
const [searchQuery, setSearchQuery] = React.useState('');

return (
    <SafeAreaProvider>
      <Searchbar
        placeholder="Digite seu produto"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: '#fff0fa',
  },
});

export default SearchTab;