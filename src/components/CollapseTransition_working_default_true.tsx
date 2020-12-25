import { MutableRefObject, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CSSTransition } from 'react-transition-group';

const useStyles = createUseStyles({
  enter: props => ({
    opacity: 0,
    height: 0,
  }),
  enterActive: props => ({
    transition: 'all .5s ease',
    opacity: 1,
    height: `${props.height}px`,
  }),
  exit: props => ({
    opacity: 1,
    height: `${props.height}px`,
  }),
  exitActive: props => ({
    transition: 'all .5s ease',
    opacity: 0,
    height: 0,
  }),
});

export const CollapseTransition = (props: { visible: boolean; children: any; }) => {

  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  const calculateHeight = () => {
    if ((ref as MutableRefObject<any>).current) {
      // console.log(+(ref as MutableRefObject<any>).current.scrollHeight);
      setHeight(+(ref as MutableRefObject<any>).current.scrollHeight);
    }
  };

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
      timeout={500}
      onEnter={() => calculateHeight()}
      onExit={() => calculateHeight()}
      mountOnEnter={true}
      unmountOnExit={true}>
      {props.children(ref)}
    </CSSTransition>
  );
};