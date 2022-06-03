import axios from 'axios';
import { Temp } from 'routes/cocktailNameSearch/cocktailDetail';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?api_key=1&s=';
const KEYS = [
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

export const getCocktailByNameApi = async ({ searchWord }: { searchWord: string }) => {
  return axios
    .get(`${DATA_URL}${searchWord}`)
    .then((res) => {
      const { drinks } = res.data;
      if (!drinks) {
        return [];
      }
      const removedNullValue = drinks.map((d: any) => {
        return KEYS.reduce((acc: Temp, curr) => {
          acc[curr] = d[curr];
          return acc;
        }, {});
      });
      return removedNullValue;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};
