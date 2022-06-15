import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

const IngredientTable = ({ strABV, strType, strAlcohol }: { strABV: string; strType: string; strAlcohol: string }) => {
  return (
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
  );
};

export default IngredientTable;
