import { css, StyleSheet } from 'aphrodite';
import { forwardRef, MutableRefObject, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const CollapseTransition = forwardRef((props: { visible: boolean; children: any; }, ref) => {

  console.log(props);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(+(ref as MutableRefObject<any>).current.scrollHeight);
  }, [ref]);

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

  return (
    <CSSTransition classNames={{
      enter: css(styles.enter),
      enterActive: css(styles.enterActive),
      exit: css(styles.exit),
      exitActive: css(styles.exitActive),
    }} in={props.visible} timeout={500} mountOnEnter={true} unmountOnExit={true}>
      {props.children}
    </CSSTransition>
  );
});