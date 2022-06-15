import { ChangeEvent, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Box, Button, Center, Divider, Flex, Heading, Input } from '@chakra-ui/react';

import Header from '../header/header';
import TopButton from 'components/button/TopButton';
import { searchWordState } from 'state/searchWordState';
import { SearchIcon } from 'assets/svgs';

import { LIST_STYLE } from 'components/_shared/LIST_STYLE';
import { LAYOUT_STYLE } from './LAYOUT_STYLE';

const Layout = () => {
  const [inputText, setInputText] = useState('');
  const setSearchWord = useSetRecoilState(searchWordState);
  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSearchButtonSubmit = (e: any) => {
    e.preventDefault();
    setSearchWord(inputText);
    setInputText('');
  };

  return (
    <Box {...LIST_STYLE.wrapper}>
      <Header />
      <Center my='8%'>
        <Heading {...LAYOUT_STYLE.logo}>COCKTAIL 4 U</Heading>
      </Center>
      <Center>
        <Flex justify='space-around' w='400px'>
          <NavLink to='/' style={({ isActive }) => (isActive ? { borderBottom: '1px solid #ffffff' } : {})}>
            <Button {...LAYOUT_STYLE.button}>COCKTAIL</Button>
          </NavLink>
          <NavLink to='/ingredient' style={({ isActive }) => (isActive ? { borderBottom: '1px solid #ffffff' } : {})}>
            <Button {...LAYOUT_STYLE.button}>INGREDIENT</Button>
          </NavLink>
        </Flex>
      </Center>
      <Center my='5%' w='100%'>
        <form onSubmit={handleSearchButtonSubmit}>
          <Box position='relative' w='330px'>
            <Input {...LAYOUT_STYLE.input} onChange={handleInputText} value={inputText} />
            <Button {...LAYOUT_STYLE.submitButton} onSubmit={handleSearchButtonSubmit}>
              <SearchIcon width='25px' />
            </Button>
          </Box>
        </form>
      </Center>
      <Divider />
      <Outlet />
      <Box {...LAYOUT_STYLE.topButton}>
        <TopButton />
      </Box>
    </Box>
  );
};

export default Layout;
