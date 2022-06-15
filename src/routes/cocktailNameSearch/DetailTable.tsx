import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

const DetailTable = ({
  strCategory,
  strGlass,
  strAlcoholic,
  strIBA,
}: {
  strCategory: string;
  strGlass: string;
  strAlcoholic: string;
  strIBA: string;
}) => {
  return (
    <TableContainer>
      <Table variant='simple' size='md'>
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
          <Tr>
            <Td>IBA</Td>
            <Td>{strIBA}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DetailTable;
