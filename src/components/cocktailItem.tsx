import { Button, Center, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import { ActiveIcon, DisabledIcon } from 'assets/svgs';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { bookmarkedState } from 'state/bookmarkedState';
import { ICocktail } from 'types/type.d';

const CocktailItem = ({ item }: { item: ICocktail }) => {
  const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass } = item;

  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkedState);
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
    <Flex flexFlow='row wrap' gap='5' minW='400px' justifyContent='space-around' p='10px'>
      <Link to={`/cocktail/${item.idDrink}`} key={item.idDrink}>
        <Image
          src={strDrinkThumb}
          alt={strDrink}
          boxSize='230px'
          borderRadius='md'
          fallback={
            <Center w='230px' h='230px'>
              <DisabledIcon width='100px' height='100px' />
            </Center>
          }
        />
      </Link>
      <Flex flexDirection='column' gap='2' maxW='250px' minW='200px' letterSpacing='wide'>
        <Heading size='lg' noOfLines={1} w='325px'>
          {strDrink}
        </Heading>
        <Button
          onClick={handleBookmarkButtonClick}
          data-drink-id={idDrink}
          my='20px'
          w='70px'
          h='30px'
          ml='-20px'
          bgColor='transparent'
          _focus={{ outline: 'none' }}
          _hover={{ bgColor: 'transparent' }}
          _active={{ bgColor: 'transparent' }}
        >
          {isbookmarked ? <ActiveIcon width='30px' height='30px' /> : <DisabledIcon width='30px' height='30px' />}
        </Button>
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
      </Flex>
    </Flex>
  );
};

export default CocktailItem;
