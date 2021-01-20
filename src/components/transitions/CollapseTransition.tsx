import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CSSTransition } from 'react-transition-group';

const useStyles = createUseStyles({
  enter: props => ({
    opacity: 0,
    height: 0,
  }),
  enterActive: props => ({
    transition: 'height .5s ease, opacity .5s ease .5s',
    opacity: 1,
    height: `${props.height}px`,
  }),
  exit: props => ({
    opacity: 1,
    height: `${props.height}px`,
  }),
  exitActive: props => ({
    transition: 'height .5s ease .5s, opacity .5s ease',
    opacity: 0,
    height: 0,
  }),
});

export const CollapseTransition = (props: { visible: boolean; children: any; }) => {

  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    calculateHeight();
  }, [props.children]);

  const calculateHeight = () => {
    if ((ref as MutableRefObject<any>).current) {
      let height = +(ref as MutableRefObject<any>).current.scrollHeight;
      // console.log('height calculated', height);
      setHeight(height);
    }
  };

  // console.log(height);
  const classes = useStyles({ height: height });

  const classNames = {
    enter: classes.enter,
    enterActive: classes.enterActive,
    exit: classes.exit,
    exitActive: classes.exitActive,
  };

  return (
    <CSSTransition
      classNames={classNames}
      in={props.visible}
      timeout={1000}
      // onEntered={() => calculateHeight()}
      // onExited={() => calculateHeight()}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {props.children(ref)}
    </CSSTransition>
  );
};