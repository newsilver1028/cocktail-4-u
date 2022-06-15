import { Box, Center, Flex, Heading, Spinner } from '@chakra-ui/react';
import { useQueries } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import IngredientItem from 'routes/IngredientSearch/IngredientItem';
import { getCocktailByIngredientApi } from 'services/getCocktailByIngredient';
import { getIngredientByNameApi } from 'services/getIngredientByNameApi';
import { searchWordState } from 'state/searchWordState';
import { ICocktailByIngredient, IIngredient } from 'types/type';
import { COMMON_STYLE } from '_shared/COMMON_STYLE';
import CocktailByIngredient from './CocktailByIngredientItem';
import { INGREDIENT_STYLE } from './INGREDIENT_STYLE';

const IngredientSearch = () => {
  const searchWord = useRecoilValue(searchWordState);

  const [ingredientsQuery, cocktailsQuery] = useQueries([
    {
      queryKey: ['getIngredientByName', searchWord],
      queryFn: () => getIngredientByNameApi({ searchWord }),
      enabled: !!searchWord,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    },
    {
      queryKey: ['getCocktailByIngredient', searchWord],
      queryFn: () => getCocktailByIngredientApi({ searchWord }),
      enabled: !!searchWord,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    },
  ]);

  const { isLoading: isIngredientsLoading, data: ingredients } = ingredientsQuery;
  const { isLoading: isCocktailsLoading, data: cocktails } = cocktailsQuery;

  return (
    <Box my='5%' minH='100vh' color='white'>
      <Heading {...INGREDIENT_STYLE.subTitle}>INGREDIENT</Heading>
      <Center>
        {isIngredientsLoading && (
          <Center {...COMMON_STYLE.spinnerWrapper}>
            <Spinner {...COMMON_STYLE.spinner} />
          </Center>
        )}
        <Flex {...INGREDIENT_STYLE.flexRow}>
          {!isIngredientsLoading &&
            ingredients &&
            ingredients.map((item: IIngredient) => <IngredientItem key={item.idIngredient} item={item} />)}
        </Flex>
      </Center>
      <Center>
        {!ingredients ||
          (ingredients.length === 0 && (
            <Heading textAlign='center' {...COMMON_STYLE.text}>
              We can&#39;t find any ingredients
            </Heading>
          ))}
      </Center>
      <Heading {...INGREDIENT_STYLE.subTitle}>COCKTAIL</Heading>
      <Center>
        <Flex {...INGREDIENT_STYLE.flexRow}>
          {isCocktailsLoading && (
            <Center {...COMMON_STYLE.spinnerWrapper}>
              <Spinner {...COMMON_STYLE.spinner} />
            </Center>
          )}
          {!isCocktailsLoading &&
            cocktails &&
            cocktails.map((item: ICocktailByIngredient) => (
              <Link to={`/ingredient/${item.idDrink}`} key={item.idDrink}>
                <CocktailByIngredient key={item.idDrink} item={item} />
              </Link>
            ))}
        </Flex>
      </Center>
      <Center>
        {!cocktails ||
          (cocktails.length === 0 && (
            <Heading textAlign='center' {...COMMON_STYLE.text}>
              We can&#39;t find any cocktails
            </Heading>
          ))}
      </Center>
    </Box>
  );
};

export default IngredientSearch;
