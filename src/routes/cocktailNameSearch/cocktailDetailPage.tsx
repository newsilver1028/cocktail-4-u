import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { postCocktailByIdApi } from 'services/postCocktailByIdApi';
import CocktailDetail from '../../components/cocktailDetail';

export type Temp = {
  [prop: string]: any;
};

const CocktailDetailPage = () => {
  const { idDrink } = useParams();
  const { isLoading, data } = useQuery('postCocktailById', () => postCocktailByIdApi());

  return <div>{!isLoading && <CocktailDetail item={data[0]} />}</div>;
};

export default CocktailDetailPage;
