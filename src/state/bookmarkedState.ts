import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const bookmarkedState = atom<string[]>({
  key: 'bookmarkedCocktail',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
