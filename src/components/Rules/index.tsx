import { 
  Center, 
  Image, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay,
  ModalProps, 
  Text 
} from '@chakra-ui/react'

interface IRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Rules( { 
  isOpen,
  onClose
 }: IRulesModalProps ) {

  
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="2xl">
        <ModalHeader>
          <Text 
            textStyle="darkText"
            fontSize="4xl"
            fontWeight="700"
            lineHeight={1}
          >RULES</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center m={16}>
            <Image src="./assets/image-rules.svg" />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
