import React from "react";
import { Searchbar } from 'react-native-paper';

const SearchTab = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Digite seu produto"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchTab;