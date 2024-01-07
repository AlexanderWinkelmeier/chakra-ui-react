import './App.css';
import { Text } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Text as="i" noOfLines={1}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
    </div>
  );
}

export default App;
