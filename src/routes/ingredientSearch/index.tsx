import { Center, Divider, Flex, Heading, Box } from '@chakra-ui/react';
import IngredientItem from 'components/ingredientItem';
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
    },
    { queryKey: ['getCocktailByIngredient', searchWord], queryFn: () => getCocktailByIngredientApi({ searchWord }) },
  ]);

  const { isLoading: isIngredientsLoading, data: ingredients } = ingredientsQuery;
  const { isLoading: isCocktailsLoading, data: cocktails } = cocktailsQuery;

  return (
    <Box my='5%'>
      <Heading size='lg' my='5%' ml='60px'>
        INGREDIENT
      </Heading>
      <Center>
        {!isIngredientsLoading &&
          ingredients &&
          ingredients.map((item: IIngredient) => <IngredientItem key={item.idIngredient} item={item} />)}
        {!ingredients ||
          (ingredients.length === 0 && (
            <Heading size='lg' my='30%'>
              We can&#39;t find any ingredients
            </Heading>
          ))}
      </Center>
      <Divider />
      <Heading size='lg' my='5%' ml='60px'>
        COCKTAIL
      </Heading>
      <Center>
        <Flex flexFlow='row wrap' rowGap='20' justify='space-around' flex='1' maxW='1080px'>
          {!isCocktailsLoading &&
            cocktails &&
            cocktails.map((item: ICocktailByIngredient) => (
              <Link to={`${item.idDrink}`} key={item.idDrink}>
                <CocktailByIngredient key={item.idDrink} item={item} />
              </Link>
            ))}
        </Flex>
        <Center>
          {!cocktails ||
            (cocktails.length === 0 && (
              <Heading size='lg' my='30%'>
                We can&#39;t find any cocktails
              </Heading>
            ))}
        </Center>
      </Center>
    </Box>
  );
};

export default IngredientSearch;
