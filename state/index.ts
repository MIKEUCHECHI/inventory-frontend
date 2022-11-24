import { configurePersist } from 'zustand-persist';
import { KeeperOption } from 'zustand-persist/lib/keeper';
import { isBrowser } from '../modules/shared';

const dummyStorage: KeeperOption['storage'] = {
  getItem: () => null,
  setItem: () => null as unknown as Promise<void>,
  removeItem: () => null as unknown as Promise<void>,
};

export const { persist, purge } = configurePersist({
  storage: isBrowser() ? localStorage : dummyStorage,
  rootKey: 'root',
});
