import { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';

export function Context() {
  const appContext = useContext(AppContext);
  return (
    <div>
      <div>context value: {appContext.theme}</div>
      <button onClick={() => { appContext.setTheme('light'); }}>change to 'light'</button>
      <button onClick={() => { appContext.setTheme('dark'); }}>change to 'dark'</button>
    </div>
  );
}