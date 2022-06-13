import { useQuery } from 'react-query';
import { postCocktailByIdApi } from 'services/postCocktailByIdApi';
import CocktailItem from '../../components/cocktailItem';

const BookmarkItems = ({ idDrink }: { idDrink: string }) => {
  const { isLoading, data } = useQuery(['postCocktailById', idDrink], () => postCocktailByIdApi({ idDrink }));

  return <div>{!isLoading && <CocktailItem key={idDrink} item={data[0]} />}</div>;
};

export default BookmarkItems;
