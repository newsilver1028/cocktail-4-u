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
import { COMMON_STYLE } from '_shared/COMMON_STYLE';
import { INGREDIENT_STYLE } from './INGREDIENT_STYLE';

const IngredientModal = ({ item, isOpen, onClose }: { item: IIngredient; isOpen: boolean; onClose: () => void }) => {
  const { strABV, strAlcohol, strDescription, strIngredient, strType } = item;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...INGREDIENT_STYLE.modal.modalContent}>
        <ModalHeader>
          <Heading noOfLines={1} size='lg' w='300px'>
            {strIngredient}
          </Heading>
        </ModalHeader>
        <ModalCloseButton {...COMMON_STYLE.button} />
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
            <Text fontSize='lg' lineHeight='10'>
              {strDescription}
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IngredientModal;
