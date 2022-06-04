import axios from 'axios';
import { formatCocktail } from 'util/formatCocktail';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const postCocktailByIdApi = async ({ idDrink }: { idDrink: string | undefined }) => {
  return axios
    .post(`${DATA_URL}${idDrink}`)
    .then((res) => {
      const { drinks } = res.data;
      const cocktails = drinks.map((d: any) => formatCocktail(d));

      return cocktails;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};
