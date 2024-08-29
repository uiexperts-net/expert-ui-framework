import * as React from 'react';
import { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput} from 'react-native-paper';
import { List} from 'react-native-paper';
// Interface for the component props
interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  // useState hook with TypeScript typing
  const [query, setQuery] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Handle text input change and filter suggestions
  const handleInputChange = (input: string) => {
    setQuery(input);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  // Handle suggestion selection
  const handleSuggestionPress = (suggestion: string) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <View>
      <TextInput
        label="Search"
        value={query}
        onChangeText={handleInputChange}
        style={styles.input}
      />
      {filteredSuggestions.length > 0 && (
        <FlatList
          data={filteredSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
              <List.Item title={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Autocomplete;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
