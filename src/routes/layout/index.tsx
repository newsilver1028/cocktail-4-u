import { Box, Button, Center, Flex, Heading, Input, Link } from '@chakra-ui/react';
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
    <Box>
      <Header />
      <Center my='10%'>
        <Heading as='h1' size='4xl' fontFamily='mono'>
          Cocktail 4 U
        </Heading>
      </Center>
      <Center my='10%'>
        <Flex flexDirection='column'>
          <Link as={NavLink} to='/' {...({ isActive }: { isActive: boolean }) => isActive && { bgColor: '#9d9d9d' }}>
            {/* <NavLink to='/' style={({ isActive }) => isActive && { backgroundColor: '#9d9d9d' }}> */}
            {/* <Button>COCKTAIL</Button> */}
            COCKTAIL
            {/* </NavLink> */}
          </Link>
          <NavLink
            to='/ingredient'
            style={(isActive) => (isActive ? { backgroundColor: '#9d9d9d' } : { backgroundColor: 'transparent' })}
          >
            <Button>INGREDIENT</Button>
            {/* INGREDIENT */}
          </NavLink>
        </Flex>
        <form onSubmit={handleSearchButtonSubmit}>
          <Box position='relative' w='400px'>
            <Input placeholder='search your cocktail' onChange={handleInputText} value={inputText} w='400px' />
            <Button
              type='submit'
              onSubmit={handleSearchButtonSubmit}
              position='absolute'
              right='0'
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
