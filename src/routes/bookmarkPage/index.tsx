import { useRecoilValue } from 'recoil';
import { Box, Center, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';

import Header from 'components/header/header';
import BookmarkItem from './BookmarkItem';
import { bookmarkedState } from 'state/bookmarkedState';

import { COMMON_STYLE } from 'components/_shared/COMMON_STYLE';
import { LIST_STYLE } from 'components/_shared/LIST_STYLE';
import { BOOKMARK_PAGE_STYLE } from './BOOKMARK_PAGE_STYLE';

const BookmarkPage = () => {
  const bookmarkList = useRecoilValue<string[]>(bookmarkedState);
  const isEmptyBookmark = bookmarkList.length === 0;

  return (
    <Box {...LIST_STYLE.wrapper}>
      <Header />
      <Center my='8%'>
        <Heading {...BOOKMARK_PAGE_STYLE.heading}>MY COCKTAIL</Heading>
      </Center>
      <Center my='10%'>
        {isEmptyBookmark ? (
          <Center>
            <Heading {...COMMON_STYLE.text}>Add your Cocktail</Heading>
          </Center>
        ) : (
          <UnorderedList listStyleType='none'>
            <Flex {...BOOKMARK_PAGE_STYLE.flexRow}>
              {bookmarkList.map((id: string) => (
                <ListItem key={id}>
                  <BookmarkItem idDrink={id} />
                </ListItem>
              ))}
            </Flex>
          </UnorderedList>
        )}
      </Center>
    </Box>
  );
};

export default BookmarkPage;
