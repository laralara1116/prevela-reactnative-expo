import React from "react";
import { Searchbar } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";

const SearchTab = () => {
const [searchQuery, setSearchQuery] = React.useState('');

return (
    <SafeAreaProvider>
      <Searchbar
        placeholder="Digite seu produto"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </SafeAreaProvider>
  );
};

export default SearchTab;