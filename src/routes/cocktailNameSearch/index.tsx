import { Center, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getCocktailByNameApi } from 'services/getCocktailByNameApi';
import { searchWordState } from 'state/searchWordState';
import { ICocktail } from 'types/type';
import CocktailItem from '../../components/cocktailItem';

const CocktailNameSearch = () => {
  const searchWord = useRecoilValue(searchWordState);
  const { isLoading, data } = useQuery(['getCocktailByName', searchWord], () => getCocktailByNameApi({ searchWord }), {
    enabled: !!searchWord,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });

  return (
    <Center w='100%' minH='container.sm'>
      {isLoading && (
        <Center w='100%' height='100vh' mt='100px' alignItems='start'>
          <Spinner size='xl' speed='1s' />
        </Center>
      )}
      {!data ||
        (data.length === 0 && (
          <Heading mt='10px' h='50vh' fontWeight='normal' size='md'>
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
