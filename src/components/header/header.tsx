import { Button, Flex, Text } from '@chakra-ui/react';
import { ActiveIcon } from 'assets/svgs';
import BackButton from 'components/button/BackButton';
import { Link } from 'react-router-dom';
import { COMMON_STYLE } from 'routes/_shared/COMMON_STYLE';
import { HEADER_STYLE } from './HEADER_STYLE';

const Header = () => {
  return (
    <header>
      <Flex w='100%' justify='space-between' mt='10px'>
        <Link to='/'>
          <Button {...COMMON_STYLE.button} mb='15px'>
            <ActiveIcon {...HEADER_STYLE.icon} />
            <Text {...HEADER_STYLE.text}>C4U</Text>
          </Button>
        </Link>
        <Link to='/bookmark'>
          <Button {...COMMON_STYLE.button} mb='15px'>
            <ActiveIcon {...HEADER_STYLE.icon} />
            <Text {...HEADER_STYLE.text}>MY COCKTAIL</Text>
          </Button>
        </Link>
      </Flex>
      <BackButton />
    </header>
  );
};

export default Header;
