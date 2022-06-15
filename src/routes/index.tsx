import { Route, Routes } from 'react-router-dom';

import '@fontsource/quicksand/700.css';
import { Center as Box, ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from './Layout';
import CocktailDetailPage from 'routes/CocktailNameSearch/CocktailDetailPage';
import BookmarkPage from './BookmarkPage';
import CocktailNameSearch from './CocktailNameSearch';
import IngredientSearch from './IngredientSearch';

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
