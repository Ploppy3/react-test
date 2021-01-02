import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import { createUseStyles } from 'react-jss';
import { ACCORDION_VERTICAL } from 'components/transitions-spring/animations';

const useStyles = createUseStyles({
  section: {
    border: '1px solid #ccc',
  }
});

export function TransitionsSpring() {

  const classes = useStyles();

  const [isVisible, setVisible] = useState(false);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <animated.div style={props}>I will fade in on mount</animated.div>
      <hr />
      <div>
        <button onClick={() => { setVisible(!isVisible); }}>Toggle (current: {isVisible ? 'true' : 'false'})</button>
      </div>
      <div className={classes.section}>
        <Transition
          items={isVisible}
          config={{ duration: 250 }}
          from={ACCORDION_VERTICAL.from}
          enter={ACCORDION_VERTICAL.enter}
          leave={ACCORDION_VERTICAL.leave}>
          {v => v && (props =>
            <div style={props}>It works! (keyframes - 2 stages - mount/dismount)</div>
          )}
        </Transition>
      </div>
    </>
  );
};