import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AutoComplete from './src/components/AutoComplete';

const App = () => {
  const suggestions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  return (
    <PaperProvider>
      <AutoComplete
        suggestions={suggestions}
        onSelect={(value) => console.log(value)}
      />
    </PaperProvider>
  );
};

export default App;
