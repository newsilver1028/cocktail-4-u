import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CocktailItem from '../../components/cocktailItem';
import { getCocktailByNameApi } from 'services/getCocktailByNameApi';
import { ICocktail } from 'types/type';
import { useRecoilValue } from 'recoil';
import { searchWordState } from 'state/searchWordState';
import { Box, Center, Flex, Heading, Spinner } from '@chakra-ui/react';

const CocktailNameSearch = () => {
  const searchWord = useRecoilValue(searchWordState);
  const { isLoading, data } = useQuery(['getCocktailByName', searchWord], () => getCocktailByNameApi({ searchWord }), {
    enabled: !!searchWord,
  });

  console.log({ data });

  return (
    <Center>
      {isLoading && (
        <Center w='940px' height='100vh' mt='100px' alignItems='start'>
          <Spinner size='xl' speed='1s' />
        </Center>
      )}
      {!data || (data.length === 0 && <Heading mt='30%'>We can&#39;t find any cocktail</Heading>)}
      <Center>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1' maxW='1080px'>
          {data && data.map((item: ICocktail) => <CocktailItem key={item.idDrink} item={item} />)}
        </Flex>
      </Center>
    </Center>
  );
};

export default CocktailNameSearch;
