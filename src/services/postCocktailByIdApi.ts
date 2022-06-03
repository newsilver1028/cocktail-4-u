import axios from 'axios';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const postCocktailByIdApi = async ({ idDrink }: { idDrink: string | undefined }) => {
  return axios
    .post(`${DATA_URL}${idDrink}`)
    .then((res) => {
      const { drinks } = res.data;
      return drinks;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};
