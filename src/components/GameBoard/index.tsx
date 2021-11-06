import { 
  Grid 
  , GridItem 
  , Center
  , HStack
  , VStack
  , Text,
  Button,
  Flex
} from "@chakra-ui/react";
import { useState } from "react";
import { useScore } from "../../hooks/useScore";
import Element, { ElementChoice } from "../Element";

export default function GameBoard() {

  const [ isPlaying, setIsPlaying ] = useState(true);
  const [ userPick, setUserPick ] = useState<ElementChoice>();
  const [ computerPick, setComputerPick ] = useState<ElementChoice>();
  const [ winner, setWinner ] = useState<'user' | 'house' | 'draw'>('draw');

  const { incrementScoreValue, decrementScoreValue } = useScore();

  function handleElementClick(element: ElementChoice) {
    play(element);
    setIsPlaying(false);    
  }

  function play(userElement: ElementChoice ) {
    const elementTypes: ElementChoice[] = ["rock","scissors","paper"];
    const computer = elementTypes[Math.floor(Math.random() * elementTypes.length)];
    setUserPick(userElement);
    setComputerPick(computer)

    let gameWinner: "user" | "house";
    
    console.log(computer, userElement, userElement === computer)

    if (userElement === computer) {
      setWinner("draw")
      return;
    }

    switch (computer) {
      case "paper":
        gameWinner = 
          userElement === "scissors" 
            ? "user"
            : "house";
        
        break;
    
      case "rock":
        gameWinner = 
          userElement === "paper" 
            ? "user"
            : "house";
        
        break;
    
      case "scissors":
        gameWinner = 
          userElement === "rock" 
            ? "user"
            : "house";
        
        break;
    
      default:
        gameWinner = "house"
        setWinner("draw")
        break;
    }

    console.log(gameWinner)

    if (gameWinner === "user") incrementScoreValue();
    if (gameWinner === "house") decrementScoreValue();

    setWinner(gameWinner)

  }

  return (
    <Center
      w="100%"
      bgImage={ isPlaying ? "./assets/bg-triangle.svg" : "" }
      bgPos="center"
      bgRepeat="no-repeat"
      py={8}
    >
      { isPlaying ? (

        <Grid column={['1fr', '1fr']} row={['1fr', '1fr']} columnGap={14} rowGap={14}>
          <GridItem>
            <Element onPick={handleElementClick} element="rock" />
          </GridItem>
          <GridItem>
            <Element onPick={handleElementClick} element="scissors" />
          </GridItem>
          <GridItem colSpan={2}>
            <Center>
              <Element onPick={handleElementClick} element="paper" />
            </Center>
          </GridItem>
        </Grid>
      ) : (
        <Flex 
          alignItems="center" 
          justifyContent="space-between"
          w="100%"
        >
          <VStack spacing={8}>
            <Text fontSize="2xl" letterSpacing={2}>YOU PICKED!</Text>
            <Element element={userPick} />
          </VStack>
          <VStack spacing={2} w="100%" mx={6} px={6}>
            <Text fontSize="5xl" fontWeight="extrabold">
              { `${ 
                winner === "draw" 
                  ? "DRAW!" 
                  : winner === "house"
                    ? "HOUSE WINS!"
                    : "YOU WIN!"}` }</Text>
            <Button 
              px={16}
              color="white"
              textColor="red"
              onClick={() => {
                setIsPlaying(true)
              }}
            >PLAY AGAIN</Button>
          </VStack>
          <VStack spacing={8}>
            <Text fontSize="2xl" letterSpacing={2}>HOUSE PICKED!</Text>
            <Element element={computerPick} />
          </VStack>          
        </Flex>
      )}      
    </Center>
  )
}
