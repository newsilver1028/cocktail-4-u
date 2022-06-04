import { Button, Divider, Flex, Text } from '@chakra-ui/react';
import { ActiveIcon } from 'assets/svgs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Flex w='100%' justify='space-between' mt='10px'>
        <Link to='/'>
          <Button
            bgColor='transparent'
            mb='15px'
            _focus={{ outline: 'none' }}
            _hover={{ bgColor: 'transparent' }}
            _active={{ bgColor: 'transparent' }}
          >
            <ActiveIcon width='30px' />
            <Text ml='10px' color='white' fontWeight='normal' fontSize='xl' letterSpacing='wide'>
              C4U
            </Text>
          </Button>
        </Link>
        <Link to='/bookmark'>
          <Button
            bgColor='transparent'
            mb='15px'
            _focus={{ outline: 'none' }}
            _hover={{ bgColor: 'transparent' }}
            _active={{ bgColor: 'transparent' }}
          >
            <ActiveIcon width='30px' />
            <Text ml='10px' color='white' fontWeight='normal' fontSize='xl' letterSpacing='wide'>
              My Cocktail
            </Text>
          </Button>
        </Link>
      </Flex>
    </header>
  );
};

export default Header;
