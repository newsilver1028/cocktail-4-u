import axios from 'axios';
import { formatCocktail } from 'util/formatCocktail';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?api_key=1&s=';

export const getCocktailByNameApi = async ({ searchWord }: { searchWord: string }) => {
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
