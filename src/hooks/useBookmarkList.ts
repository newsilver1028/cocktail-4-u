import { useRecoilState } from 'recoil';
import { bookmarkedState } from 'state/bookmarkedState';

export const useBookmarkList = ({ idDrink }: { idDrink: string }) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkedState);
  const isBookmarked: boolean = bookmarkList.includes(idDrink);

  const handleBookmarkButtonClick = () => {
    if (!isBookmarked) {
      setBookmarkList((prev) => [...prev, idDrink]);
      return;
    }
    setBookmarkList((prev) => prev.filter((id) => id !== idDrink));
  };

  return { isBookmarked, handleBookmarkButtonClick };
};
