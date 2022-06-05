import { ChakraProvider, Center as Box, extendTheme } from '@chakra-ui/react';
import CocktailDetailPage from 'routes/cocktailNameSearch/cocktailDetailPage';
import BookmarkPage from './bookmarkPage';
import { Route, Routes } from 'react-router-dom';
import CocktailNameSearch from './cocktailNameSearch';
import IngredientSearch from './ingredientSearch';
import Layout from './layout';

import '@fontsource/quicksand/700.css';

const theme = extendTheme({
  colors: {
    bgColor: {
      100: '#7f5a83',
      200: '#0d324d',
    },
  },
  font: {
    logo: `'Quicksand', sans-serif'`,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient='linear( to-br,  bgColor.100 0%, bgColor.200 74% )'>
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
      </Box>
    </ChakraProvider>
  );
};

export default App;
