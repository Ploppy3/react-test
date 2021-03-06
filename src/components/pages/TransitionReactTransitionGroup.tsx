
import { CollapseTransition4 } from 'components/transitions/CollapseTransition4';
import { Toggler } from 'components/Toggler';
import { Fragment, useState } from 'react';
import { CollapseTransitionJss } from '../transitions/CollapseTransitionJss';

export function TransitionReactTransitionGroup() {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>Animations</div>

      <hr />

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
      <CollapseTransitionJss visible={visible}>
        <div>test children</div>
      </CollapseTransitionJss>

      <hr />

      <Toggler>
        {(state) =>
          <CollapseTransition4 visible={state}>
            <div>Test</div>
            {
              visible &&
              <div>child</div>
            }
          </CollapseTransition4>
        }
      </Toggler>

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