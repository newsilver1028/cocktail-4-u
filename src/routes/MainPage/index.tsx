import { useQuery } from 'react-query';
import { getCocktailByNameApi } from 'services/getCocktailByNameApi';

const MainPage = () => {
  const { isLoading, data } = useQuery('getCocktailByName', () => getCocktailByNameApi());

  return (
    <div>
      main page
      {!isLoading &&
        data.forEach((d: any) => {
          console.log(d);
        })}
    </div>
  );
};

export default MainPage;
