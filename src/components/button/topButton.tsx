import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { COMMON_STYLE } from 'routes/_shared/COMMON_STYLE';

const TopButton = () => {
  const handleTopButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button {...COMMON_STYLE.button} onClick={handleTopButtonClick}>
      <ArrowUpIcon w='30px' h='30px' />
    </Button>
  );
};

export default TopButton;
