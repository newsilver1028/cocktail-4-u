export const COCKTAIL_ITEM_STYLE = {
  flexRow: {
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    gap: '5',
    p: '10px',
    minW: '400px',
  },
  flexColumn: {
    gap: '2',
    maxW: '250px',
    minW: '200px',
    letterSpacing: 'wide',
  },
  title: {
    size: 'lg',
    w: '325px',
  },
  image: {
    boxSize: '230px',
    borderRadius: 'md',
  },
  button: {
    my: '20px',
    ml: '-20px',
    w: '70px',
    h: '30px',
    bgColor: 'transparent',
    _focus: { outline: 'none' },
    _hover: { bgColor: 'transparent' },
    _active: { bgColor: 'transparent' },
  },
};