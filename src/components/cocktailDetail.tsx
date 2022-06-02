import { ICocktail } from 'types/type';
import { combineSameKey } from 'util/combineSameKey';

export type Temp = {
  [prop: string]: any;
};

const CocktailDetail = ({ item }: { item: ICocktail }) => {
  const { strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass } = item;

  const keyArray: [string, string] = ['strIngredient', 'strMeasure'];
  const [strIngredient, strMeasure] = combineSameKey({ keyArray, item });

  return (
    <div>
      <img src={strDrinkThumb} alt={strDrink} width='200px' />
      <div>{strDrink}</div>
      <div>{strCategory}</div>
      <div>{strGlass}</div>
      <div>{strAlcoholic}</div>
    </div>
  );
};

export default CocktailDetail;
