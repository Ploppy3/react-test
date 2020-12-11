import { createContext } from 'react';

export const AppContext = createContext({
  theme: 'light',
  setTheme: (theme: string) => { },
});