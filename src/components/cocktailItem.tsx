import { Button, Center, Flex, Heading, Image, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import { ActiveIcon, DisabledIcon } from 'assets/svgs';
import { useBookmarkList } from 'hooks/useBookmarkList';
import { Link } from 'react-router-dom';
import { ICocktail } from 'types/type.d';
import { COCKTAIL_ITEM_STYLE } from './COCKTAIL_ITEM_STYLE';
import { COMMON_STYLE } from '../_shared/COMMON_STYLE';

const CocktailItem = ({ item }: { item: ICocktail }) => {
  const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass } = item;
  const { isBookmarked, handleBookmarkButtonClick } = useBookmarkList({ idDrink });

  return (
    <Flex {...COCKTAIL_ITEM_STYLE.flexRow}>
      <Link to={`/cocktail/${item.idDrink}`} key={item.idDrink}>
        <Image
          src={strDrinkThumb}
          alt={strDrink}
          {...COCKTAIL_ITEM_STYLE.image}
          fallback={
            <Center w='230px' h='230px'>
              <DisabledIcon width='100px' height='100px' />
            </Center>
          }
        />
      </Link>
      <Flex {...COCKTAIL_ITEM_STYLE.flexColumn}>
        <Heading noOfLines={1} {...COCKTAIL_ITEM_STYLE.title} wordBreak='break-all'>
          {strDrink}
        </Heading>
        <Button {...COCKTAIL_ITEM_STYLE.button} onClick={handleBookmarkButtonClick}>
          {isBookmarked ? <ActiveIcon {...COMMON_STYLE.icon} /> : <DisabledIcon {...COMMON_STYLE.icon} />}
        </Button>
        <TableContainer>
          <Table variant='simple' size='sm'>
            <Tbody>
              <Tr>
                <Td>SORT</Td>
                <Td>{strCategory}</Td>
              </Tr>
              <Tr>
                <Td>GLASS</Td>
                <Td>{strGlass}</Td>
              </Tr>
              <Tr>
                <Td>ALCOHOL</Td>
                <Td>{strAlcoholic}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default CocktailItem;
