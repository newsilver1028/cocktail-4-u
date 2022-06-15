import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

const CocktailTable = ({
  strCategory,
  strGlass,
  strAlcoholic,
}: {
  strCategory: string;
  strGlass: string;
  strAlcoholic: string;
}) => {
  return (
    <TableContainer>
      <Table variant='simple' size='sm'>
        <Tbody>
          <Tr>
            <Td>SORT</Td>
            <Td>{strCategory}</Td>
          </Tr>
          <Tr>
            <Td>GLASS</Td>
            <Td>{strGlass}</Td>
          </Tr>
          <Tr>
            <Td>ALCOHOL</Td>
            <Td>{strAlcoholic}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CocktailTable;
