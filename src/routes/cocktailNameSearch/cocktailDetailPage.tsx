import { Box, Center, Spinner } from '@chakra-ui/react';
import Header from 'components/header/header';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { LIST_STYLE } from 'routes/_shared/LIST_STYLE';
import { postCocktailByIdApi } from 'services/postCocktailByIdApi';
import { COMMON_STYLE } from '_shared/COMMON_STYLE';
import CocktailDetail from './cocktailDetail';

const CocktailDetailPage = () => {
  const { idDrink } = useParams<string>();
  const { isLoading, data } = useQuery(['postCocktailById', idDrink], () => postCocktailByIdApi({ idDrink }));

  return (
    <Box {...LIST_STYLE.wrapper}>
      <Header />
      {isLoading && (
        <Center {...COMMON_STYLE.spinnerWrapper}>
          <Spinner {...COMMON_STYLE.spinner} />
        </Center>
      )}
      {!isLoading && <CocktailDetail item={data[0]} />}
    </Box>
  );
};

export default CocktailDetailPage;
