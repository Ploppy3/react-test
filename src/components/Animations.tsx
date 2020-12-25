import { Collapse } from 'components/Collapse';
import { CollapseTransition } from 'components/CollapseTransition';
import { TestTransition } from 'components/TestTransition';
import { useState } from 'react';

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