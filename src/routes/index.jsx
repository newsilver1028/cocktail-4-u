import { Center } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';

const App = () => {
  return (
    <Center my='20px'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='todo' element={<MainPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </Center>
  );
};

export default App;
