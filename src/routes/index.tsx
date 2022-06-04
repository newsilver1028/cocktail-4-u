import { ChakraProvider, Center, extendTheme } from '@chakra-ui/react';
import CocktailDetailPage from 'routes/cocktailNameSearch/cocktailDetailPage';
import BookmarkPage from './bookmarkPage';
import { Route, Routes } from 'react-router-dom';
import CocktailNameSearch from './cocktailNameSearch';
import IngredientSearch from './ingredientSearch';
import Layout from './layout';

const theme = extendTheme({
  colors: {
    bgColor: {
      // 100: '#2c3e4e',
      // 200: ' #456783',
      100: '#000000',
      200: '#172736',
    },
    // background: linear( to-r,  bgColor.100 12.6%, bgColor.200 82.8% )
    // fontColor: {},
    // background-image: linear-gradient( 89.7deg,  #000000 -10.7%, '#355c7d' 88.8% );
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Center bgGradient='linear( to-r,  bgColor.100 12.6%, bgColor.200 82.8% )'> */}
      <Center bgGradient='linear( to-r,  bgColor.100 -10.7%, bgColor.200 88.8% )'>
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
