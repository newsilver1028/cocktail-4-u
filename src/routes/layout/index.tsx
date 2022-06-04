import { Box, Button, Center, Flex, Heading, Input } from '@chakra-ui/react';
import { SearchIcon } from 'assets/svgs';
import { ChangeEvent, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { searchWordState } from 'state/searchWordState';
import Header from '../../components/header/header';

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
    <Box maxW='1080px' w='container.xl' color='white'>
      <Header />
      <Center my='8%'>
        <Heading as='h1' size='2xl' letterSpacing='widest' color='white' fontFamily='font.logo'>
          COCKTAIL 4 U
        </Heading>
      </Center>
      <Center>
        <Flex justify='space-around' w='400px'>
          <NavLink to='/' style={({ isActive }) => (isActive ? { borderBottom: '1px solid #ffffff' } : {})}>
            <Button
              fontSize='lg'
              fontWeight='normal'
              bgColor='transparent'
              overflow='hidden'
              letterSpacing='wide'
              _focus={{ outline: 'none' }}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
            >
              COCKTAIL
            </Button>
          </NavLink>
          <NavLink to='/ingredient' style={({ isActive }) => (isActive ? { borderBottom: '1px solid #ffffff' } : {})}>
            <Button
              fontSize='lg'
              fontWeight='normal'
              bgColor='transparent'
              letterSpacing='wide'
              _focus={{ outline: 'none' }}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
            >
              INGREDIENT
            </Button>
          </NavLink>
        </Flex>
      </Center>
      <Center my='5%' w='100%'>
        <form onSubmit={handleSearchButtonSubmit}>
          <Box position='relative' w='330px'>
            <Input
              fontSize='xl'
              letterSpacing='wide'
              placeholder='Search your cocktail'
              _placeholder={{ color: 'white', fontSize: 'xl', letterSpacing: 'wide' }}
              onChange={handleInputText}
              value={inputText}
              w='100%'
              h='50px'
              _focus={{ outline: 'none' }}
            />
            <Button
              type='submit'
              onSubmit={handleSearchButtonSubmit}
              position='absolute'
              right='0'
              top='1'
              bgColor='transparent'
              _focus={{ outline: 'none' }}
              _hover={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
            >
              <SearchIcon width='25px' />
            </Button>
          </Box>
        </form>
      </Center>
      <Outlet />
    </Box>
  );
};

export default Layout;
