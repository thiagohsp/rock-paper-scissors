import { Box, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ScoreProvider } from './hooks/useScore';
import { theme } from './styles/themes';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ScoreProvider>
          <Box 
            h="100vh" 
            bgGradient="radial(hsl(214, 47%, 23%), hsl(237, 49%, 15%))"
            color="#fff"
          >
            <App />
          </Box>
        </ScoreProvider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

