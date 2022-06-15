import { useQuery } from 'react-query';
import { Box } from '@chakra-ui/react';

import CocktailItem from 'routes/_shared/CocktailItem';
import { postCocktailByIdApi } from 'services/postCocktailByIdApi';

const BookmarkItem = ({ idDrink }: { idDrink: string }) => {
  const { isLoading, data = [] } = useQuery(['postCocktailById', idDrink], () => postCocktailByIdApi({ idDrink }));

  return <Box>{!isLoading && <CocktailItem key={idDrink} item={data[0]} />}</Box>;
};

export default BookmarkItem;
