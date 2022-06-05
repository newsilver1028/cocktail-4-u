import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { IIngredient } from 'types/type.d';

const IngredientModal = ({ item, isOpen, onClose }: { item: IIngredient; isOpen: boolean; onClose: () => void }) => {
  const { strABV, strAlcohol, strDescription, strIngredient, strType } = item;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW='500px'
        py='10px'
        border='1px solid white'
        bgGradient='linear( to-r,  bgColor.100 -10.7%, bgColor.200 88.8% )'
        color='white'
      >
        <ModalHeader>
          <Heading size='lg' noOfLines={1} w='300px'>
            {strIngredient}
          </Heading>
        </ModalHeader>
        <ModalCloseButton
          _focus={{ outline: 'none' }}
          _hover={{ bgColor: 'transparent' }}
          _active={{ bgColor: 'transparent' }}
        />
        <ModalBody>
          <Flex flexDirection='column' rowGap='10'>
            <TableContainer>
              <Table variant='simple' size='md'>
                <Tbody>
                  <Tr>
                    <Td>ABV</Td>
                    <Td>{strABV}</Td>
                  </Tr>
                  <Tr>
                    <Td>Type</Td>
                    <Td>{strType}</Td>
                  </Tr>
                  <Tr>
                    <Td>ALCOHOL</Td>
                    <Td>{strAlcohol}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Heading size='lg'>Description</Heading>
            <Text fontSize='lg'>{strDescription}</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IngredientModal;
