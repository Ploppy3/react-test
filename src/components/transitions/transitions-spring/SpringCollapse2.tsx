import { ReactNode } from 'react';
import { useTransition, animated } from 'react-spring';

export function SpringCollapse2(props: { visible: boolean; children: ReactNode; }) {

  const transitions = useTransition(props.visible, null, {
    from: {
      height: 0,
      opacity: 0,
    },
    enter: [
      {
        height: 'auto',
      },
      {
        opacity: 1,
      },
    ],
    leave: [
      {
        opacity: 0,
      },
      {
        height: 0,
      },
    ],
  });

  return (
    <>
      {
        transitions.map(({ item, key, props }) =>
          item && <animated.div style={props}>It works!</animated.div>
        )
      }
    </>
  );
};