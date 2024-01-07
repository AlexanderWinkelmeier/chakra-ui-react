import './App.css';
import { Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box bg="green" w="200px" h="300px" margin="auto" mt="32px">
        <Text fontSize="32px">This is a style props example</Text>
      </Box>
    </div>
  );
}

export default App;
