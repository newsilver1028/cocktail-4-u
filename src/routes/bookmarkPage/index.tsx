import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import CocktailItem from 'components/cocktailItem';
import Header from 'components/header/header';
import { useRecoilValue } from 'recoil';
import { bookmarkedState } from 'state/bookmarkedState';
import { ICocktail } from 'types/type';

const BookmarkPage = () => {
  const bookmarkList = useRecoilValue<ICocktail[]>(bookmarkedState);
  return (
    <Box>
      <Header />
      <Center my='10%'>
        <Heading size='3xl'>My Cocktail</Heading>
      </Center>
      <Center>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1' maxW='1080px'>
          {!bookmarkList
            ? '좋아하는 칵테일을 찜해보세요!'
            : bookmarkList.map((item: ICocktail) => <CocktailItem key={item.idDrink} item={item} />)}
        </Flex>
      </Center>
    </Box>
  );
};

export default BookmarkPage;
