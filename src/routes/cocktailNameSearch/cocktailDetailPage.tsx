import { Box, Center, Spinner } from '@chakra-ui/react';
import Header from 'components/header/header';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { postCocktailByIdApi } from 'services/postCocktailByIdApi';
import CocktailDetail from './cocktailDetail';

const CocktailDetailPage = () => {
  const { idDrink } = useParams<string>();
  const { isLoading, data } = useQuery(['postCocktailById', idDrink], () => postCocktailByIdApi({ idDrink }));

  return (
    <Box maxW='1080px' w='container.xl' color='white' letterSpacing='wide'>
      <Header />
      {isLoading && (
        <Center height='100vh' w='750px'>
          <Spinner size='xl' speed='1s' />
        </Center>
      )}
      {!isLoading && <CocktailDetail item={data[0]} />}
    </Box>
  );
};

export default CocktailDetailPage;
