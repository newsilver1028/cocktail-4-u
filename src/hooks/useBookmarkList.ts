import { useRecoilState } from 'recoil';
import { bookmarkedState } from 'state/bookmarkedState';
import { ICocktail } from 'types/type';

export const useBookmarkList = ({ idDrink, item }: { idDrink: string; item: ICocktail }) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkedState);
  const isbookmarked = bookmarkList.find((bookmark) => bookmark.idDrink === idDrink);

  const handleBookmarkButtonClick = (e: any) => {
    const { drinkId } = e.currentTarget.dataset;

    if (!isbookmarked) {
      setBookmarkList((prev) => [...prev, item]);
      return;
    }
    setBookmarkList((prev) => prev.filter((bookmark) => bookmark.idDrink !== drinkId));
  };

  return { isbookmarked, handleBookmarkButtonClick };
};
