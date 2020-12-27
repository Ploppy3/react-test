
import { useState } from 'react';
import { Collapse } from './Collapse';
import { CollapseTransition } from './CollapseTransition';
import { TestTransition } from './TestTransition';

export function Animations() {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>Animations</div>

      <hr />

      <Collapse></Collapse>

      <hr />

      <button onClick={() => { setVisible(!visible); }}>toggle</button>

      <CollapseTransition visible={visible}>
        {(ref: any) => (
          <div ref={ref}>
            test
          </div>
        )}
      </CollapseTransition>

      <hr />

      <TestTransition></TestTransition>

    </div>
  );
}