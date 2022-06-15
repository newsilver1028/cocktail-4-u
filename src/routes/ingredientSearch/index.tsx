import { useQueries } from 'react-query';
import { useRecoilValue } from 'recoil';
import { Box, Center, Flex, Heading, ListItem, Spinner, UnorderedList } from '@chakra-ui/react';

import IngredientItem from 'routes/IngredientSearch/IngredientItem';
import CocktailByIngredient from './CocktailByIngredientItem';
import { searchWordState } from 'state/searchWordState';
import { getCocktailByIngredientApi } from 'services/getCocktailByIngredient';
import { getIngredientByNameApi } from 'services/getIngredientByNameApi';

import { ICocktailByIngredient, IIngredient } from 'types/type';

import { COMMON_STYLE } from 'components/_shared/COMMON_STYLE';
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

  const { isLoading: isIngredientsLoading, data: ingredients = [] } = ingredientsQuery;
  const { isLoading: isCocktailsLoading, data: cocktails = [] } = cocktailsQuery;

  const isEmptyingredients = ingredients.length === 0;
  const isEmptyCocktails = cocktails.length === 0;

  return (
    <Box my='5%' minH='100vh' color='white'>
      <Heading {...INGREDIENT_STYLE.subTitle}>INGREDIENT</Heading>
      <Center>
        {isIngredientsLoading && (
          <Center {...COMMON_STYLE.spinnerWrapper}>
            <Spinner {...COMMON_STYLE.spinner} />
          </Center>
        )}
        <UnorderedList listStyleType='none'>
          <Flex {...INGREDIENT_STYLE.flexRow}>
            {ingredients.map((item: IIngredient) => (
              <ListItem key={item.idIngredient}>
                <IngredientItem item={item} />
              </ListItem>
            ))}
          </Flex>
        </UnorderedList>
      </Center>
      <Center>
        {isEmptyingredients && (
          <Heading textAlign='center' {...COMMON_STYLE.text}>
            We can&#39;t find any ingredients
          </Heading>
        )}
      </Center>
      <Heading {...INGREDIENT_STYLE.subTitle}>COCKTAIL</Heading>
      <Center>
        {isCocktailsLoading && (
          <Center {...COMMON_STYLE.spinnerWrapper}>
            <Spinner {...COMMON_STYLE.spinner} />
          </Center>
        )}
        <UnorderedList listStyleType='none'>
          <Flex {...INGREDIENT_STYLE.flexRow}>
            {cocktails.map((item: ICocktailByIngredient) => (
              <ListItem key={item.idDrink}>
                <CocktailByIngredient key={item.idDrink} item={item} />
              </ListItem>
            ))}
          </Flex>
        </UnorderedList>
      </Center>
      <Center>
        {isEmptyCocktails && (
          <Heading textAlign='center' {...COMMON_STYLE.text}>
            We can&#39;t find any cocktails
          </Heading>
        )}
      </Center>
    </Box>
  );
};

export default IngredientSearch;
