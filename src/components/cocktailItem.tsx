import { ICocktail } from 'types/type';

const CocktailItem = ({ item }: { item: ICocktail }) => {
  const { strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass } = item;

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

export default CocktailItem;
