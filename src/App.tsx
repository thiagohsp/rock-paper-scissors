import { Box, Button, Center, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import Element from './components/Element';
import Header from './components/Header';
import Rules from './components/Rules';
import { useScore } from './hooks/useScore';
import GameBoard from './components/GameBoard';

function App() {

  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  function handleToogleRulesModal() {
    setIsRulesModalOpen(!isRulesModalOpen)
  }

  const { reset, incrementScoreValue } = useScore()
 
  return (
    <>

      { isRulesModalOpen && (
        <Rules 
          isOpen={isRulesModalOpen}
          onClose={handleToogleRulesModal}
        />
      )}      

      <Center>
        <VStack
          w="100%"
          maxW="60vw"
          alignItems="center"
          justifyContent="space-between"
          h="100vh"
          p={12}
        >
          <Header />

          <GameBoard />

          <Flex
            w="100%"
            justifyContent="space-between"
            px={4}
          >
            <Button
              color="white"
              border="2px solid"
              borderColor="whiteAlpha.300"
              borderRadius="lg"
              variant="ghost"
              size="lg"
              colorScheme="whiteAlpha"
              onClick={reset}
            >
              RESET
            </Button>
            <Button
              color="white"
              border="2px solid"
              borderColor="whiteAlpha.300"
              borderRadius="lg"
              variant="ghost"
              size="lg"
              colorScheme="whiteAlpha"
              onClick={handleToogleRulesModal}
            >
              RULES
            </Button>
          </Flex>
        </VStack>
      </Center>

    </>
  );
}

export default App;
