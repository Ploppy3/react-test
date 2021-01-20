import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CSSTransition } from 'react-transition-group';

const useStyles = createUseStyles({
  enter: props => ({
    opacity: 0,
    height: 0,
  }),
  enterActive: props => ({
    transition: 'opacity .25s .25s ease, height .25s ease',
    opacity: 1,
    height: `${props.height}px`,
  }),
  enterDone: props => ({
  }),
  exit: props => ({
    opacity: 1,
    height: `${props.height}px`,
  }),
  exitActive: props => ({
    transition: 'opacity .25s ease, height .25s .25s ease',
    opacity: 0,
    height: 0,
  }),
  exitDone: props => ({
    height: 0,
    overflow: 'hidden',
  }),
});

export const CollapseTransitionJss = (props: { visible: boolean, children: any; }) => {

  const [height, setHeight] = useState(0);

  const ref: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(+ref.current.scrollHeight);
    }
  }, [ref, props.visible]);

  // const classes = useStyles({ height: +ref.current.clientHeight });
  const classes = useStyles({ height: height });

  const classNames = {
    enter: classes.enter,
    enterActive: classes.enterActive,
    enterDone: classes.enterDone,
    exit: classes.exit,
    exitActive: classes.exitActive,
    exitDone: classes.exitDone,
  };

  return (
    <CSSTransition classNames={classNames} in={props.visible} nodeRef={ref} timeout={500} mountOnEnter={true} unmountOnExit={true}>
      <div ref={ref}>
        {props.children}
      </div>
    </CSSTransition>
  );

};