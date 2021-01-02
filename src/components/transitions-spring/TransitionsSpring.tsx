import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  section: {
    border: '1px solid #ccc',
  }
});

export function TransitionsSpring() {

  const classes = useStyles();

  const [isVisible, setVisible] = useState(false);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const accordionVertical = {
    from: {
      height: 0,
      opacity: 0,
    } as any,
    enter: [
      {
        height: 'auto',
      },
      {
        opacity: 1,
      },
    ] as any,
    leave: [
      {
        opacity: 0,
      },
      {
        height: 0,
      },
    ] as any,
  };

  return (
    <>
      <animated.div style={props}>I will fade in on mount</animated.div>
      <div>
        <button onClick={() => { setVisible(!isVisible); }}>Toggle (current: {isVisible ? 'true' : 'false'})</button>
      </div>
      <div className={classes.section}>
        <Transition items={isVisible} config={{ duration: 250 }} from={accordionVertical.from} enter={accordionVertical.enter} leave={accordionVertical.leave}>
          {v => v && (props =>
            <div style={props}>It works! (keyframes - 2 stages - mount/dismount)</div>
          )}
        </Transition>
      </div>
    </>
  );
};