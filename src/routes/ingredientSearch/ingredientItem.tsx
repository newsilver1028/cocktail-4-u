import { Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { IIngredient } from 'types/type.d';
import IngredientModal from './IngradientModal';
import IngredientTable from './IngredientTable';
import { INGREDIENT_STYLE } from './INGREDIENT_STYLE';

const IngredientItem = ({ item }: { item: IIngredient }) => {
  const { strABV, strAlcohol, strIngredient, strType } = item;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex onClick={onOpen} flexDirection='column' {...INGREDIENT_STYLE.itemWrapper}>
        <Heading noOfLines={1} {...INGREDIENT_STYLE.ingredientTitle}>
          {strIngredient}
        </Heading>
        <IngredientTable strABV={strABV} strType={strType} strAlcohol={strAlcohol} />
      </Flex>
      <IngredientModal item={item} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default IngredientItem;
