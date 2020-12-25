import { css, StyleSheet } from 'aphrodite';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export function Collapse() {

  const [visible, setVisible] = useState(true);
  const [height, setHeight] = useState(0);

  const ref: MutableRefObject<any> = useRef(null);

  const styles = StyleSheet.create({
    enter: {
      opacity: 0,
      height: 0,
    },
    enterActive: {
      transition: 'all .5s ease',
      opacity: 1,
      height: height,
    },
    exit: {
      opacity: 1,
      height: height,
    },
    exitActive: {
      transition: 'all .5s ease',
      opacity: 0,
      height: 0,
    },
  });

  useEffect(() => {
    setHeight(+ref.current.scrollHeight);
  }, [ref]);

  return (
    <div>
      <div>
        <div>
          <button onClick={() => { setVisible(true); }}>
            show
          </button>
          <button onClick={() => { setVisible(false); }}>
            hide
          </button>
        </div>
        <div>visible: {visible ? 'true' : 'false'}</div>
        <div>
          <button onClick={() => console.log(styles)}>debug</button>
        </div>
      </div>
      {
        <CSSTransition classNames={{
          enter: css(styles.enter),
          enterActive: css(styles.enterActive),
          exit: css(styles.exit),
          exitActive: css(styles.exitActive),
        }} in={visible} timeout={500} mountOnEnter={true} unmountOnExit={true}>
          <div ref={ref}>test</div>
        </CSSTransition>
      }
    </div>
  );
}