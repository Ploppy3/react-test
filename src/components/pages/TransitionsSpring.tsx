import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { createUseStyles } from 'react-jss';
import { SpringCollapse } from 'components/transitions/transitions-spring/SpringCollapse';
import { SpringCollapse2 } from 'components/transitions/transitions-spring/SpringCollapse2';
import { Toggler } from 'components/Toggler';
import { SpringCollapse3 } from 'components/transitions/transitions-spring/SpringCollapse3';

const useStyles = createUseStyles({
  section: {
    border: '1px solid #ccc',
  }
});

export function TransitionsSpring() {

  const classes = useStyles();

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <animated.div style={props}>I will fade-in on mount</animated.div>
      <hr />
      <div>
        <ToggleButton visible={visible} setVisible={setVisible}></ToggleButton>
      </div>
      <div className={classes.section}>
        <SpringCollapse visible={visible}>
          It works! (keyframes - 2 stages - mount/dismount)
        </SpringCollapse>
      </div>
      <hr />
      <div>
        <ToggleButton visible={visible2} setVisible={setVisible2}></ToggleButton>
      </div>
      <div className={classes.section}>
        <SpringCollapse2 visible={visible2}>
          It works! (keyframes - 2 stages - mount/dismount)
        </SpringCollapse2>
      </div>
      <hr />
      <Toggler>
        {
          state => <SpringCollapse3 visible={state}></SpringCollapse3>
        }
      </Toggler>
      <hr />
    </>
  );
};

function ToggleButton(props: { visible: boolean, setVisible: (number: boolean) => void; }) {
  return (
    <>
      <button onClick={() => { props.setVisible(!props.visible); }}>Toggle</button> ({ props.visible ? 'true' : 'false'})
    </>
  );
}