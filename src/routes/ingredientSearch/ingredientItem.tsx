import { Flex, Heading, Table, TableContainer, Tbody, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { IIngredient } from 'types/type.d';
import IngredientModal from './ingradientModal';

const IngredientItem = ({ item }: { item: IIngredient }) => {
  const { strABV, strAlcohol, strIngredient, strType } = item;
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
      <IngredientModal item={item} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default IngredientItem;
