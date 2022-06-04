import { ICocktail } from 'types/type';

type ICocktailKey = keyof ICocktail;

const KEYS: ICocktailKey[] = [
  'idDrink',
  'strAlcoholic',
  'strCategory',
  'strDrink',
  'strDrinkThumb',
  'strGlass',
  'strIBA',
  'strImageAttribution',
  'strIngredient',
  'strMeasure',
  'strInstructions',
];

export const formatCocktail = (drink: any): ICocktail => {
  const result: ICocktail = KEYS.reduce<ICocktail>((acc, curr) => {
    acc[curr] = drink[curr];
    return acc;
  }, {} as ICocktail);

  const ingredientKey = Object.keys(drink).filter((k) => k.includes('strIngredient') && drink[k]);
  const ingredientValue = ingredientKey.map((k) => drink[k]);

  const measureKey = Object.keys(drink).filter((k) => k.includes('strMeasure') && drink[k]);
  const measureValue = measureKey.map((k) => drink[k]);

  result.strIngredient = ingredientValue;
  result.strMeasure = measureValue;

  return result;
};
