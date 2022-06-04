import axios from 'axios';
import { formatCocktail } from 'util/formatCocktail';

export const getCocktailByNameApi = async ({ searchWord }: { searchWord: string }) => {
  let DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?api_key=1&s=';
  if (searchWord.length === 1) {
    DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
  }

  return axios
    .get(`${DATA_URL}${searchWord}`)
    .then((res) => {
      const { drinks } = res.data;
      if (!drinks) {
        return [];
      }
      const cocktails = drinks.map((d: any) => formatCocktail(d));

      return cocktails;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};
