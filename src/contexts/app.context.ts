import { createContext } from 'react';

export const AppContext = createContext({
  appSettings: {
    theme: 'light',
  },
  setTheme: (theme: string) => { },
});