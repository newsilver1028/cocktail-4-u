import { IIngredient } from 'types/type.d';

const IngredientItem = ({ item }: { item: IIngredient }) => {
  const { strABV, strAlcohol, strDescription, strIngredient, strType } = item;

  return (
    <div>
      <div>{strIngredient}</div>
      <div>{strABV}</div>
      <div>{strAlcohol}</div>
      <div>{strType}</div>
      {/* <div>{strDescription}</div> */}
    </div>
  );
};

export default IngredientItem;
