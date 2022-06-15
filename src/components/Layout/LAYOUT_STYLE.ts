import { ButtonProps, ChakraProps, HeadingProps } from '@chakra-ui/react';

export const LAYOUT_STYLE = {
  logo: {
    as: 'h1',
    size: '2xl',
    letterSpacing: 'widest',
    color: 'white',
    fontFamily: 'font.logo',
  } as HeadingProps,
  button: {
    bgColor: 'transparent',
    overflow: 'hidden',
    fontSize: 'lg',
    fontWeight: 'normal',
    letterSpacing: 'wide',
    _focus: { outline: 'none' },
    _hover: { bgColor: 'transparent' },
    _active: { bgColor: 'transparent' },
  },
  input: {
    w: '100%',
    h: '50px',
    placeholder: 'Search your cocktail',
    fontSize: 'xl',
    letterSpacing: 'wide',
    _placeholder: { color: 'white', fontSize: 'xl', letterSpacing: 'wide' },
    _focus: { outline: 'none' },
  },
  submitButton: {
    type: 'submit',
    position: 'absolute',
    right: '0',
    top: '1',
    bgColor: 'transparent',
    _focus: { outline: 'none' },
    _hover: { bgColor: 'transparent' },
    _active: { bgColor: 'transparent' },
  } as ButtonProps,
  topButton: {
    position: 'fixed',
    right: '0',
    bottom: '2',
  } as ChakraProps,
};
