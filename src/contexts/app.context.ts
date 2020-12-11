import { createContext } from 'react';

export const AppContext = createContext({
  settings: {
    theme: 'light',
  },
  setTheme: (theme: string) => { },
});