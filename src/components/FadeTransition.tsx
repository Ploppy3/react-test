import { useState } from 'react';
import { Transition } from 'react-transition-group';

export function FadeTransition() {

  const defaultStyle = {
    transition: `opacity 500ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [key: string]: {}; } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => { setVisible(!visible); }}>
          {visible ? 'hide' : 'show'}
        </button>
        <div>Visible: {visible ? 'true' : 'false'}</div>
      </div>
      <Transition in={visible} timeout={0}>
        {
          state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm a fade transition!
            </div>
          )
        }
      </Transition>
    </div>
  );
}