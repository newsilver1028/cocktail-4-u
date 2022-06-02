import axios from 'axios';
import { ICocktail } from 'types/type';
import { isNil, omitBy } from 'lodash';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15395';

export const postCocktailByIdApi = async () => {
  return axios.post(DATA_URL).then((res) => {
    const { drinks } = res.data;
    const removedNullValue = drinks.map((drink: ICocktail) => omitBy(drink, isNil));
    return removedNullValue;
  });
};
