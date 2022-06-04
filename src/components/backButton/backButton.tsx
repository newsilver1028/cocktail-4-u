import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={handleBackButtonClick}
      bgColor='transparent'
      _focus={{ outline: 'none' }}
      _hover={{ bgColor: 'transparent' }}
      _active={{ bgColor: 'transparent' }}
    >
      <ArrowBackIcon w='30px' h='30px' />
    </Button>
  );
};

export default BackButton;
