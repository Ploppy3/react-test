import { useContext } from 'react';
import App from '../App';
import { AppContext } from '../contexts/app.context';

export function Context() {
  const appContext = useContext(AppContext);
  return (
    <div>
      <div>context value: {appContext.settings.theme}</div>
      <button onClick={() => { appContext.setTheme('light'); }}>change to 'light'</button>
      <button onClick={() => { appContext.setTheme('dark'); }}>change to 'dark'</button>
    </div>
  );
}