import { Center, Spinner } from '@chakra-ui/react';
import Header from 'components/header/header';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { postCocktailByIdApi } from 'services/postCocktailByIdApi';
import CocktailDetail from './cocktailDetail';

export type Temp = {
  [prop: string]: any;
};

const CocktailDetailPage = () => {
  const { idDrink } = useParams<string>();
  const { isLoading, data } = useQuery(['postCocktailById', idDrink], () => postCocktailByIdApi({ idDrink }));

  return (
    <div>
      <Header />
      {isLoading && (
        <Center height='100vh' w='750px'>
          <Spinner size='xl' speed='1s' />
        </Center>
      )}
      {!isLoading && <CocktailDetail item={data[0]} />}
    </div>
  );
};

export default CocktailDetailPage;
