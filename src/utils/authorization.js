// @flow
import localStore from 'store';

export const LOCAL_STORAGE_KEY = 'TEST_TODO_APP';

export function saveTokenToLocalStorage(token: string): boolean {
  localStore.set(LOCAL_STORAGE_KEY, { token });

  return true;
}
