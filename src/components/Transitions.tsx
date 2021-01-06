
import { useState } from 'react';
import { Collapse } from './Collapse';
import { CollapseTransition } from './CollapseTransition';
import { CollapseTransitionWithAddedDiv } from './CollapseTransitionWithAddedDiv';

export function Animations() {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>Animations</div>

      <hr />
      <Collapse></Collapse>

      {/* <hr />
      <ToggleButton visible={visible} setVisible={setVisible}></ToggleButton>
      <CollapseTransition visible={visible}>
        {(ref: any) => (
          <div ref={ref}>
            test
          </div>
        )}
      </CollapseTransition> */}

      <hr />
      <div>Collapse transition with mount/unmount</div>
      <ToggleButton visible={visible} setVisible={setVisible}></ToggleButton>
      <CollapseTransitionWithAddedDiv visible={visible}>
        <div>test children</div>
      </CollapseTransitionWithAddedDiv>

      <hr />

    </div>
  );
}

function ToggleButton(props: { visible: boolean, setVisible: (number: boolean) => void; }) {
  return (
    <>
      <button onClick={() => { props.setVisible(!props.visible); }}>Toggle</button> ({ props.visible ? 'true' : 'false'})
    </>
  );
}