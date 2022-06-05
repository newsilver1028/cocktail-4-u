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
import { useRecoilState } from 'recoil';
import { bookmarkedState } from 'state/bookmarkedState';
import { ICocktail } from 'types/type.d';

export type Temp = {
  [prop: string]: any;
};

const CocktailDetail = ({ item }: { item: ICocktail }) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkedState);

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

  const isbookmarked = bookmarkList.find((bookmark) => bookmark.idDrink === idDrink);

  const handleBookmarkButtonClick = (e: any) => {
    const { drinkId } = e.currentTarget.dataset;
    if (!isbookmarked) {
      setBookmarkList((prev) => [...prev, item]);
      return;
    }
    setBookmarkList((prev) => prev.filter((bookmark) => bookmark.idDrink !== drinkId));
  };

  return (
    <Center my='10%' color='white'>
      <Flex flexDirection='column' rowGap='20'>
        <Center>
          <Flex justify='space-between' my='10%'>
            <Heading size='3xl'>{strDrink}</Heading>
            <Button
              onClick={handleBookmarkButtonClick}
              data-drink-id={idDrink}
              mt='10px'
              bgColor='transparent'
              _focus={{ outline: 'none' }}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
            >
              {isbookmarked ? <ActiveIcon width='40px' height='40px' /> : <DisabledIcon width='40px' height='40px' />}
            </Button>
          </Flex>
        </Center>
        <Flex flexWrap='wrap' justifyContent='space-around' gap='20'>
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
            boxSize='350px'
            borderRadius='md'
            fallback={
              <Center w='350px' h='350px'>
                <DisabledIcon width='200px' height='200px' />
              </Center>
            }
          />
        </Flex>
        <Flex flexDirection='column' rowGap='20' maxW='720px' m='30px 20px'>
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
