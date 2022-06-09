import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { COMMON_STYLE } from '_shared/COMMON_STYLE';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBackButtonClick} {...COMMON_STYLE.button}>
      <ArrowBackIcon w='30px' h='30px' />
    </Button>
  );
};

export default BackButton;
