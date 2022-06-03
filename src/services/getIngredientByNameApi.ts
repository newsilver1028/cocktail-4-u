import axios from 'axios';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

export const getIngredientByNameApi = async ({ searchWord }: { searchWord: string }) => {
  return axios
    .get(`${DATA_URL}${searchWord}`)
    .then((res) => {
      const { ingredients } = res.data;
      if (!ingredients) {
        return [];
      }
      return ingredients;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
    });
};
