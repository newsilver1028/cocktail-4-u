import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const TopButton = () => {
  const handleTopButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={handleTopButtonClick}
      bgColor='transparent'
      _focus={{ outline: 'none' }}
      _hover={{ bgColor: 'transparent' }}
      _active={{ bgColor: 'transparent' }}
    >
      <ArrowUpIcon w='30px' h='30px' />
    </Button>
  );
};

export default TopButton;
