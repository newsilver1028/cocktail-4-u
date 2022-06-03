import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ICocktail } from 'types/type';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const bookmarkedState = atom<ICocktail[] | []>({
  key: 'bookmarkedCocktail',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
