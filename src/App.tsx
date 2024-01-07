import './App.css';
import { Box, Stack, HStack, VStack } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <HStack spacing="24px">
        <Box bg="green" w="100px" h="200px">
          item 1
        </Box>
        <Box bg="blue" w="100px" h="100px">
          item 2
        </Box>
        <Box bg="red" w="200px" h="100px">
          item 3
        </Box>
        <Box bg="tomato" w="100px" h="200px">
          item 4
        </Box>
      </HStack>
    </div>
  );
}

export default App;
