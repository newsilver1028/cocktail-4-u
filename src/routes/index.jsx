import { ChakraProvider, Center } from '@chakra-ui/react';
import CocktailDetailPage from 'routes/cocktailNameSearch/cocktailDetailPage';
import BookmarkPage from './bookmarkPage';
import { Route, Routes } from 'react-router-dom';
import CocktailNameSearch from './cocktailNameSearch';
import IngredientSearch from './ingredientSearch';
import Layout from './layout';

const App = () => {
  return (
    <ChakraProvider>
      <Center my='20px'>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<CocktailNameSearch />} />
            <Route path='ingredient' element={<IngredientSearch />} />
            <Route path='*' element={<div>404</div>} />
          </Route>
          <Route path='cocktail/:idDrink' element={<CocktailDetailPage />} />
          <Route path='bookmark' element={<BookmarkPage />} />
          <Route path='ingredient/:idDrink' element={<CocktailDetailPage />} />
        </Routes>
      </Center>
    </ChakraProvider>
  );
};

export default App;
