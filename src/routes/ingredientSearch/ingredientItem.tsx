import { Flex, Heading, Table, TableContainer, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { IIngredient } from 'types/type.d';
import IngredientModal from './ingradientModal';
import { INGREDIENT_STYLE } from './INGREDIENT_STYLE';

const IngredientItem = ({ item }: { item: IIngredient }) => {
  const { strABV, strAlcohol, strIngredient, strType } = item;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex onClick={onOpen} flexDirection='column' {...INGREDIENT_STYLE.itemWrapper}>
        <Heading noOfLines={1} {...INGREDIENT_STYLE.ingredientTitle}>
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
      <IngredientModal item={item} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default IngredientItem;
