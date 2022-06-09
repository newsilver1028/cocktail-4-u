import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { ActiveIcon, DisabledIcon } from 'assets/svgs';
import { useBookmarkList } from 'hooks/useBookmarkList';
import { ICocktail } from 'types/type.d';
import { COMMON_STYLE } from '_shared/COMMON_STYLE';
import { COCKTAIL_DETAIL_STYLE } from './COCKTAIL_DETAIL_STYLE';

export type Temp = {
  [prop: string]: any;
};

const CocktailDetail = ({ item }: { item: ICocktail }) => {
  const {
    idDrink,
    strAlcoholic,
    strCategory,
    strDrink,
    strDrinkThumb,
    strGlass,
    strIBA,
    strIngredient,
    strMeasure,
    strInstructions,
  } = item;

  const { isbookmarked, handleBookmarkButtonClick } = useBookmarkList({ idDrink, item });

  return (
    <Center my='10%' color='white'>
      <Flex flexDirection='column' rowGap='20'>
        <Center>
          <Flex justify='space-between' my='10%'>
            <Heading size='3xl'>{strDrink}</Heading>
            <Button onClick={handleBookmarkButtonClick} data-drink-id={idDrink} mt='10px' {...COMMON_STYLE.button}>
              {isbookmarked ? (
                <ActiveIcon {...COCKTAIL_DETAIL_STYLE.icon} />
              ) : (
                <DisabledIcon {...COCKTAIL_DETAIL_STYLE.icon} />
              )}
            </Button>
          </Flex>
        </Center>
        <Flex flexWrap='wrap' {...COCKTAIL_DETAIL_STYLE.flexRow}>
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
          <Image
            src={strDrinkThumb}
            alt={strDrink}
            {...COCKTAIL_DETAIL_STYLE.image}
            fallback={
              <Center w='350px' h='350px'>
                <DisabledIcon width='200px' height='200px' />
              </Center>
            }
          />
        </Flex>
        <Flex flexDirection='column' {...COCKTAIL_DETAIL_STYLE.flexColumn}>
          <Box>
            <Heading size='lg'>Description</Heading>
            <Text fontSize='lg' my='20px'>
              {strInstructions}
            </Text>
          </Box>
          <Box>
            <Heading size='lg'>Recipe</Heading>
            <TableContainer my='20px'>
              <Table variant='simple' size='lg'>
                <Thead>
                  <Tr>
                    <Th color='white'>INGREDIENT</Th>
                    <Th color='white'>MEASURE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {strIngredient.map((ingredient, i) => {
                    const measure = strMeasure[i] ?? '';
                    return (
                      <Tr key={ingredient}>
                        <Td>{ingredient}</Td>
                        <Td>{measure}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};

export default CocktailDetail;
