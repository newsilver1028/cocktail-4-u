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
      <Center my='8%'>
        <Heading size='2xl' letterSpacing='widest' fontFamily='font.logo'>
          MY COCKTAIL
        </Heading>
      </Center>
      <Center my='10%'>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1' maxW='1080px' my='10%'>
          {bookmarkList.length === 0 ? (
            <Heading mt='30%' h='50vh' fontWeight='normal' size='md'>
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
