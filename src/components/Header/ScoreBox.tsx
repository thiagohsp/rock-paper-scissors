import { Box , Text} from '@chakra-ui/react'
import { useScore } from '../../hooks/useScore'

export default function ScoreBox() {

  const { scoreValue } = useScore();
  return (
    <Box
          py={4}
          px={8}
          bg="#fff"
          borderRadius='xl'
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Text
            textStyle="scoreText"
            fontSize="sm"
            letterSpacing="widest"
          >
            SCORE
          </Text>
          <Text
            textStyle="darkText"
            fontSize="6xl"
            fontWeight="700"
            lineHeight={1}
          >
            {scoreValue  || 0}
          </Text>
        </Box>
  )
}
