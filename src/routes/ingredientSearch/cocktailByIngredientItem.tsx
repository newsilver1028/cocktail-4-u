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
          src={strDrinkThumb}
          alt={strDrink}
          {...INGREDIENT_STYLE.image}
          fallback={
            <Center w='250px' h='250px'>
              <DisabledIcon width='100px' height='100px' />
            </Center>
          }
        />
      </Center>
      <Center>
        <Heading noOfLines={1} {...INGREDIENT_STYLE.title}>
          {strDrink}
        </Heading>
      </Center>
    </Flex>
  );
};

export default CocktailByIngredient;
