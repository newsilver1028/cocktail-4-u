import { Link } from 'react-router-dom';
import { Center, Flex, Heading, Image } from '@chakra-ui/react';

import { ICocktailByIngredient } from 'types/type';

import { DisabledIcon } from 'assets/svgs';
import { INGREDIENT_STYLE } from './INGREDIENT_STYLE';

const CocktailByIngredient = ({ item }: { item: ICocktailByIngredient }) => {
  const { strDrink, strDrinkThumb } = item;

  return (
    <Flex {...INGREDIENT_STYLE.flexColumn}>
      <Center>
        <Link to={`/ingredient/${item.idDrink}`}>
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
        </Link>
      </Center>
      <Center>
        <Heading {...INGREDIENT_STYLE.title}>{strDrink}</Heading>
      </Center>
    </Flex>
  );
};

export default CocktailByIngredient;
