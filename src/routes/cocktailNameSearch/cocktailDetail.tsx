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
import { useBookmarkList } from 'hooks/useBookmarkList';

import DetailTable from './DetailTable';
import { ActiveIcon, DisabledIcon } from 'assets/svgs';

import { ICocktail } from 'types/type.d';

import { COMMON_STYLE } from 'components/_shared/COMMON_STYLE';
import { COCKTAIL_DETAIL_STYLE } from './COCKTAIL_DETAIL_STYLE';

const CocktailDetail = ({ item }: { item: ICocktail }) => {
  const {
    idDrink,
    strAlcoholic,
    strCategory,
    strDrink,
    strDrinkThumb,
    strGlass,
    strIBA = '',
    strIngredient,
    strMeasure,
    strInstructions,
  } = item;

  const { isBookmarked, handleBookmarkButtonClick } = useBookmarkList({ idDrink });

  return (
    <Center my='10%' color='white'>
      <Flex flexDirection='column' rowGap='20'>
        <Center>
          <Flex justify='space-around' my='10%'>
            <Center>
              <Heading size='3xl'>{strDrink}</Heading>
            </Center>
            <Button onClick={handleBookmarkButtonClick} mt='10px' {...COMMON_STYLE.button}>
              {isBookmarked ? (
                <ActiveIcon {...COCKTAIL_DETAIL_STYLE.icon} />
              ) : (
                <DisabledIcon {...COCKTAIL_DETAIL_STYLE.icon} />
              )}
            </Button>
          </Flex>
        </Center>
        <Flex {...COCKTAIL_DETAIL_STYLE.flexRow}>
          <DetailTable strCategory={strCategory} strGlass={strGlass} strAlcoholic={strAlcoholic} strIBA={strIBA} />
          <Image
            {...COCKTAIL_DETAIL_STYLE.image}
            src={strDrinkThumb}
            alt={strDrink}
            fallback={
              <Center w='350px' h='350px'>
                <DisabledIcon width='200px' height='200px' />
              </Center>
            }
          />
        </Flex>
        <Flex {...COCKTAIL_DETAIL_STYLE.flexColumn}>
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
