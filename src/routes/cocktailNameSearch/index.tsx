import { Center, Flex, Heading, Spinner } from '@chakra-ui/react';
import { COMMON_STYLE } from '_shared/COMMON_STYLE';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getCocktailByNameApi } from 'services/getCocktailByNameApi';
import { searchWordState } from 'state/searchWordState';
import { ICocktail } from 'types/type';
import CocktailItem from '../../components/CocktailItem';

const CocktailNameSearch = () => {
  const searchWord = useRecoilValue(searchWordState);
  const { isLoading, data } = useQuery(['getCocktailByName', searchWord], () => getCocktailByNameApi({ searchWord }), {
    enabled: !!searchWord,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });

  return (
    <Center w='100%' minH='100vh'>
      {isLoading && (
        <Center {...COMMON_STYLE.spinnerWrapper}>
          <Spinner {...COMMON_STYLE.spinner} />
        </Center>
      )}
      {!data ||
        (data.length === 0 && (
          <Heading textAlign='center' {...COMMON_STYLE.text}>
            We can&#39;t find any cocktail
          </Heading>
        ))}
      <Center my='10%'>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1' maxW='1080px' color='white'>
          {data && data.map((item: ICocktail) => <CocktailItem key={item.idDrink} item={item} />)}
        </Flex>
      </Center>
    </Center>
  );
};

export default CocktailNameSearch;
