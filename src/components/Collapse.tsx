
import { MutableRefObject, useEffect, useRef, useState } from 'react';
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

export function Collapse() {

  const [visible, setVisible] = useState(true);
  const [height, setHeight] = useState(0);

  const ref: MutableRefObject<any> = useRef(null);

  const classes = useStyles({ height: height });

  useEffect(() => {
    setHeight(+ref.current.scrollHeight);
  }, [ref]);

  const classNames = {
    enter: classes.enter,
    enterActive: classes.enterActive,
    exit: classes.exit,
    exitActive: classes.exitActive,
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={() => { setVisible(!visible); }}>
            toggle
          </button>
        </div>
        <div>visible: {visible ? 'true' : 'false'}</div>
      </div>
      {
        <CSSTransition classNames={classNames} in={visible} timeout={500} mountOnEnter={true} unmountOnExit={true}>
          <div ref={ref}>test</div>
        </CSSTransition>
      }
    </div>
  );
}