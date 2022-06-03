import { Box, Button, Center, Flex, Heading, Input } from '@chakra-ui/react';
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
      <Center>
        <form onSubmit={handleSearchButtonSubmit}>
          <Flex justify='space-between' maxW='800px' w='90%'>
            <Input placeholder='search your cocktail' onChange={handleInputText} value={inputText} maxW='700px' />
            <Button onClick={handleSearchButtonSubmit}>검색</Button>
          </Flex>
        </form>
      </Center>
      <Flex flexDirection='column'>
        <NavLink to='/'>
          {/* <Button>COCKTAIL</Button> */}
          COCKTAIL
        </NavLink>
        <NavLink to='ingredient'>
          {/* <Button>INGREDIENT</Button> */}
          INGREDIENT
        </NavLink>
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Layout;
