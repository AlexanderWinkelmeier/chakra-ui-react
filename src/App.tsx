import './App.css';
import { Box, Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box bg="green" w="200px" h="300px" margin="auto" mt="32px">
        <Text fontSize="32px">This is a style props example</Text>
        <Button
          mt="32px"
          bgColor="red"
          _hover={{ bgColor: 'blue' }}
          _focus={{ bgColor: 'yellow', color: 'black' }}
        >
          Click me
        </Button>
      </Box>
    </div>
  );
}

export default App;
