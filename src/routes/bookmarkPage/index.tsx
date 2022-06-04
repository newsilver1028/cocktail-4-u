import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import CocktailItem from 'components/cocktailItem';
import Header from 'components/header/header';
import { useRecoilValue } from 'recoil';
import { bookmarkedState } from 'state/bookmarkedState';
import { ICocktail } from 'types/type';

const BookmarkPage = () => {
  const bookmarkList = useRecoilValue<ICocktail[]>(bookmarkedState);
  return (
    <Box maxW='1080px' w='container.xl' color='white' minH='container.md'>
      <Header />
      <Center my='10%'>
        <Heading size='2xl' letterSpacing='widest'>
          My Cocktail
        </Heading>
      </Center>
      <Center my='10%'>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1' maxW='1080px'>
          {bookmarkList.length === 0 ? (
            <Heading mt='30%' fontWeight='normal' h='50vh'>
              Add your Cocktail
            </Heading>
          ) : (
            bookmarkList.map((item: ICocktail) => <CocktailItem key={item.idDrink} item={item} />)
          )}
        </Flex>
      </Center>
    </Box>
  );
};

export default BookmarkPage;
