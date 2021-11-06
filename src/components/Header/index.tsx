import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import ScoreBox from './ScoreBox'

export default function Header() {
  return (
    <Box
      w="100%"
      border="2px solid"
      borderColor="whiteAlpha.300"
      borderRadius='2xl'
      p={4}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Heading lineHeight="0.85">ROCK</Heading>
          <Heading lineHeight="0.85">PAPER</Heading>
          <Heading lineHeight="0.85">SCISSORS</Heading>
        </Box>

        <ScoreBox />

      </Flex>
    </Box>
  )
}
