import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import IngredientTable from './IngredientTable';

import { IIngredient } from 'types/type.d';

import { COMMON_STYLE } from 'routes/_shared/COMMON_STYLE';
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
            <IngredientTable strABV={strABV} strType={strType} strAlcohol={strAlcohol} />
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
