import { Flex, Heading, Center, Image } from '@chakra-ui/react';
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
          fallbackSrc='https://cdn-icons-png.flaticon.com/512/3126/3126698.png'
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
