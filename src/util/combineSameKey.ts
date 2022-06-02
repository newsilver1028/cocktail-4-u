import { Temp } from 'components/cocktailDetail';
import { ICocktail } from 'types/type';

export const combineSameKey = ({ keyArray, item }: { keyArray: [string, string]; item: ICocktail }) => {
  const keys = Object.keys(item);
  const result = keyArray.map((keyElement: string) => {
    const sameKeyArray = keys.filter((key: string) => key.includes(keyElement));
    const sameKeyObject: Temp = {};
    // eslint-disable-next-line no-return-assign
    sameKeyArray.forEach((element: string) => (sameKeyObject[element] = item[element]));
    return sameKeyObject;
  });
  return result;
};
