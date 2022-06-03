import {
  Button,
  Text,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { IIngredient } from 'types/type.d';

const IngredientItem = ({ item }: { item: IIngredient }) => {
  const { strABV, strAlcohol, strDescription, strIngredient, strType } = item;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex onClick={onOpen} cursor='pointer' flexDirection='column' h='250px' my='5%'>
        <Heading size='lg' noOfLines={1} w='300px' ml='10px' mb='10px'>
          {strIngredient}
        </Heading>
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
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='500px'>
          <ModalHeader>
            <Heading size='lg' noOfLines={1} w='300px'>
              {strIngredient}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
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
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IngredientItem;
