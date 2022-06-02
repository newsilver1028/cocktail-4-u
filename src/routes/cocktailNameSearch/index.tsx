import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CocktailItem from '../../components/cocktailItem';
import { getCocktailByNameApi } from 'services/getCocktailByNameApi';
import { ICocktail } from 'types/type';

const CocktailNameSearch = () => {
  const { isLoading, data } = useQuery('getCocktailByName', () => getCocktailByNameApi());

  console.log({ data });

  return (
    <div>
      {!isLoading &&
        data.map((item: ICocktail) => (
          <Link to={`cocktail/${item.idDrink}`} key={item.idDrink}>
            <CocktailItem key={item.idDrink} item={item} />
          </Link>
        ))}
    </div>
  );
};

export default CocktailNameSearch;
