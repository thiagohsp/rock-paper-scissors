import { Circle, Image } from "@chakra-ui/react";

export type ElementChoice = 'rock' | 'scissors' | 'paper';

interface ElementProps {
  element: ElementChoice | undefined;
  onPick?: (picked: ElementChoice) => void
}

export default function Element({ element , onPick}: ElementProps) {
  if (element) {
    return (
      <Circle
        w={48}
        h={48}
        bg="white"
        border="16px solid"
        borderColor={`${element}.100`}
        boxShadow={`5px 8px 1px 0px var(--chakra-colors-${element}-300), inset 5px 8px 1px 0px rgba(0, 0, 0, 0.3)`}
        onClick={() => onPick && onPick(element)}
      >
        <Image
          boxSize="120px"
          src={`./assets/icon-${element}.svg`}
          alt={element}
          p={4}
        />
      </Circle>
    )
  }

  return <></>
}