import { Button, Center, Flex, Heading, Image } from '@chakra-ui/react';
import { ActiveIcon, DisabledIcon } from 'assets/svgs';
import { useBookmarkList } from 'hooks/useBookmarkList';
import { Link } from 'react-router-dom';
import { ICocktail } from 'types/type.d';
import CocktailTable from '../_shared/CocktailTable';
import { COMMON_STYLE } from '../_shared/COMMON_STYLE';
import { COCKTAIL_ITEM_STYLE } from './COCKTAIL_ITEM_STYLE';

const CocktailItem = ({ item }: { item: ICocktail }) => {
  const { idDrink, strAlcoholic, strCategory, strDrink, strDrinkThumb, strGlass } = item;
  const { isBookmarked, handleBookmarkButtonClick } = useBookmarkList({ idDrink });

  return (
    <Flex {...COCKTAIL_ITEM_STYLE.flexRow}>
      <Link to={`/cocktail/${item.idDrink}`} key={item.idDrink}>
        <Image
          {...COCKTAIL_ITEM_STYLE.image}
          src={strDrinkThumb}
          alt={strDrink}
          fallback={
            <Center w='230px' h='230px'>
              <DisabledIcon width='100px' height='100px' />
            </Center>
          }
        />
      </Link>
      <Flex {...COCKTAIL_ITEM_STYLE.flexColumn}>
        <Heading {...COCKTAIL_ITEM_STYLE.title}>{strDrink}</Heading>
        <Button {...COCKTAIL_ITEM_STYLE.button} onClick={handleBookmarkButtonClick}>
          {isBookmarked ? <ActiveIcon {...COMMON_STYLE.icon} /> : <DisabledIcon {...COMMON_STYLE.icon} />}
        </Button>
        <CocktailTable strAlcoholic={strAlcoholic} strCategory={strCategory} strGlass={strGlass} />
      </Flex>
    </Flex>
  );
};

export default CocktailItem;
