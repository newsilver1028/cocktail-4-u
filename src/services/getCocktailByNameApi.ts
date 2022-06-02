import axios from 'axios';
import { ICocktail } from 'types/type';
import { isNil, omitBy } from 'lodash';

const DATA_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=milk&api_key=1';

export const getCocktailByNameApi = async () => {
  return axios.get(DATA_URL).then((res) => {
    /**
     * null인 데이터 지우기
     * strInstructionsZH-HANS?: null
     * strInstructionsZH-HANT?: null
     * 데이터 속성 카멜케이스로 바꾸기
     */
    const { drinks } = res.data;
    const removedNullValue = drinks.map((drink: ICocktail) => {
      const removed = omitBy(drink, isNil);
      const keys = Object.keys(drink);
      const strIngredientArray = keys.filter((key: string) => key.includes('strIngredient'));
      const strMeasureArray = keys.filter((key: string) => key.includes('strMeasure'));
      // const strIngredientObject =
      // removed['strIngredient'] =
      return removed;
    });
    return removedNullValue;
  });
};
