import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import Header from 'components/header/header';
import { useRecoilValue } from 'recoil';
import { LIST_STYLE } from 'routes/_shared/LIST_STYLE';
import { bookmarkedState } from 'state/bookmarkedState';
import { COMMON_STYLE } from '_shared/COMMON_STYLE';
import BookmarkItems from './BookmarkItems';
import { BOOKMARK_PAGE_STYLE } from './BOOKMARK_PAGE_STYLE';

const BookmarkPage = () => {
  const bookmarkList = useRecoilValue<string[]>(bookmarkedState);

  return (
    <Box {...LIST_STYLE.wrapper}>
      <Header />
      <Center my='8%'>
        <Heading {...BOOKMARK_PAGE_STYLE.heading}>MY COCKTAIL</Heading>
      </Center>
      <Center my='10%'>
        <Flex {...BOOKMARK_PAGE_STYLE.flexRow}>
          {bookmarkList.length === 0 ? (
            <Heading textAlign='center' {...COMMON_STYLE.text}>
              Add your Cocktail
            </Heading>
          ) : (
            bookmarkList.map((id: string) => <BookmarkItems key={id} idDrink={id} />)
          )}
        </Flex>
      </Center>
    </Box>
  );
};

export default BookmarkPage;
