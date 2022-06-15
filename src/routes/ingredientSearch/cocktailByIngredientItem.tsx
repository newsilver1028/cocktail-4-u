import { Center, Flex, Heading, Image } from '@chakra-ui/react';
import { DisabledIcon } from 'assets/svgs';
import { ICocktailByIngredient } from 'types/type';
import { INGREDIENT_STYLE } from './INGREDIENT_STYLE';

const CocktailByIngredient = ({ item }: { item: ICocktailByIngredient }) => {
  const { strDrink, strDrinkThumb } = item;

  return (
    <Flex {...INGREDIENT_STYLE.flexColumn}>
      <Center>
        <Image
          {...INGREDIENT_STYLE.image}
          src={strDrinkThumb}
          alt={strDrink}
          fallback={
            <Center w='250px' h='250px'>
              <DisabledIcon width='100px' height='100px' />
            </Center>
          }
        />
      </Center>
      <Center>
        <Heading {...INGREDIENT_STYLE.title} noOfLines={1} wordBreak='break-all'>
          {strDrink}
        </Heading>
      </Center>
    </Flex>
  );
};

export default CocktailByIngredient;
