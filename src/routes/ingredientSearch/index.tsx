import { Center, Divider, Flex, Heading, Box, Spinner } from '@chakra-ui/react';
import IngredientItem from 'routes/ingredientSearch/ingredientItem';
import { useQueries } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getCocktailByIngredientApi } from 'services/getCocktailByIngredient';
import { getIngredientByNameApi } from 'services/getIngredientByNameApi';
import { searchWordState } from 'state/searchWordState';
import { ICocktailByIngredient, IIngredient } from 'types/type';
import CocktailByIngredient from './cocktailByIngredientItem';

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
    <Box my='5%' minH='container.md' color='white'>
      <Heading size='lg' my='10%' ml='60px' fontWeight='medium'>
        INGREDIENT
      </Heading>
      <Center>
        {isIngredientsLoading && (
          <Center w='100%' height='50vh' mt='100px' alignItems='start'>
            <Spinner size='xl' speed='1s' />
          </Center>
        )}
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1'>
          {!isIngredientsLoading &&
            ingredients &&
            ingredients.map((item: IIngredient) => <IngredientItem key={item.idIngredient} item={item} />)}
        </Flex>
      </Center>
      <Center>
        {!ingredients ||
          (ingredients.length === 0 && (
            <Heading size='lg' my='10%' fontWeight='normal'>
              We can&#39;t find any ingredients
            </Heading>
          ))}
      </Center>
      <Heading size='lg' my='5%' ml='60px' fontWeight='medium'>
        COCKTAIL
      </Heading>
      <Center>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1'>
          {isCocktailsLoading && (
            <Center w='100%' height='50vh' mt='100px' alignItems='start'>
              <Spinner size='xl' speed='1s' />
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
            <Heading size='lg' my='10%' fontWeight='normal'>
              We can&#39;t find any cocktails
            </Heading>
          ))}
      </Center>
    </Box>
  );
};

export default IngredientSearch;
