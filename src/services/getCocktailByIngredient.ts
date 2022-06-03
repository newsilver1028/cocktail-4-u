import axios from 'axios';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const getCocktailByIngredientApi = async ({ searchWord }: { searchWord: string }) => {
  return axios
    .get(`${DATA_URL}${searchWord}`)
    .then((res) => {
      const { drinks } = res.data;
      if (!drinks) {
        return [];
      }
      return drinks;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};
