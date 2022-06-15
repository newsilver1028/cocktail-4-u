import { FlexProps } from '@chakra-ui/react';

export const COCKTAIL_DETAIL_STYLE = {
  flexRow: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20',
  } as FlexProps,
  flexColumn: {
    flexDirection: 'column',
    rowGap: '20',
    m: '30px 20px',
    maxW: '720px',
  } as FlexProps,
  icon: {
    width: '40px',
    height: '40px',
  },
  image: {
    boxSize: '350px',
    borderRadius: 'md',
  },
};
