import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { Center, Flex, Heading, ListItem, Spinner, UnorderedList } from '@chakra-ui/react';

import CocktailItem from 'routes/_shared/CocktailItem';
import { searchWordState } from 'state/searchWordState';
import { getCocktailByNameApi } from 'services/getCocktailByNameApi';

import { ICocktail } from 'types/type';

import { LIST_STYLE } from 'components/_shared/LIST_STYLE';
import { COMMON_STYLE } from 'components/_shared/COMMON_STYLE';

const CocktailNameSearch = () => {
  const searchWord = useRecoilValue(searchWordState);
  const { isLoading, data = [] } = useQuery(
    ['getCocktailByName', searchWord],
    () => getCocktailByNameApi({ searchWord }),
    {
      enabled: !!searchWord,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

  const isEmptyData = data.length === 0;

  return (
    <Center w='100%' minH='100vh'>
      {isLoading && (
        <Center {...COMMON_STYLE.spinnerWrapper}>
          <Spinner {...COMMON_STYLE.spinner} />
        </Center>
      )}
      {!isLoading && isEmptyData && (
        <Center>
          <Heading {...COMMON_STYLE.text}>We can&#39;t find any cocktail</Heading>
        </Center>
      )}
      <Center my='10%'>
        <UnorderedList listStyleType='none'>
          <Flex {...LIST_STYLE.unorderedList}>
            {data.map((item: ICocktail) => (
              <ListItem key={item.idDrink}>
                <CocktailItem item={item} />
              </ListItem>
            ))}
          </Flex>
        </UnorderedList>
      </Center>
    </Center>
  );
};

export default CocktailNameSearch;
