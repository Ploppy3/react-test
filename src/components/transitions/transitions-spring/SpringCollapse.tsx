import { ReactNode } from 'react';
import { Transition } from 'react-spring/renderprops';

const ACCORDION_VERTICAL = {
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

export function SpringCollapse(props: { visible: boolean; children: ReactNode; }) {
  return (
    <Transition
      items={props.visible}
      config={{ duration: 250 }}
      from={ACCORDION_VERTICAL.from}
      enter={ACCORDION_VERTICAL.enter}
      leave={ACCORDION_VERTICAL.leave}>
      {
        v => v && (_props =>
          <div style={_props}>{props.children}</div>
        )
      }
    </Transition>
  );
};