import axios from 'axios';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=milk&api_key=1';

export const getCocktailByNameApi = async () => {
  return axios.get(DATA_URL).then((res) => {
    return res.data.drinks;
  });
};
