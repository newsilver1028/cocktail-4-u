import { Center } from '@chakra-ui/react';
import CocktailDetailPage from 'routes/cocktailNameSearch/cocktailDetailPage';
import { Route, Routes } from 'react-router-dom';
import CocktailNameSearch from './cocktailNameSearch';
import IngredientSearch from './ingredientSearch';
import Layout from './layout';

const App = () => {
  return (
    <Center my='20px'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CocktailNameSearch />} />
          <Route path='ingredient' element={<IngredientSearch />} />
          <Route path='cocktail/:idDrink' element={<CocktailDetailPage />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </Center>
  );
};

export default App;
