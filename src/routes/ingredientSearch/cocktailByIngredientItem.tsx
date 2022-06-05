import { Center, Flex, Heading, Image } from '@chakra-ui/react';
import { DisabledIcon } from 'assets/svgs';
import { ICocktailByIngredient } from 'types/type';

const CocktailByIngredient = ({ item }: { item: ICocktailByIngredient }) => {
  const { strDrink, strDrinkThumb } = item;

  return (
    <Flex flexFlow='column' gap='5' minW='300px' justifyContent='space-around'>
      <Center>
        <Image
          src={strDrinkThumb}
          alt={strDrink}
          boxSize='250px'
          borderRadius='md'
          fallback={
            <Center w='250px' h='250px'>
              <DisabledIcon width='100px' height='100px' />
            </Center>
          }
        />
      </Center>
      <Center>
        <Heading size='lg' noOfLines={1} w='250px'>
          {strDrink}
        </Heading>
      </Center>
    </Flex>
  );
};

export default CocktailByIngredient;
